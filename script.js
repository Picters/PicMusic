const clientId = '23acb15671f7460da1ef99503d7f96c4'; // Укажите здесь ваш Client ID
const redirectUri = 'https://picters.github.io/PicMusic/';  // Ваш Redirect URI, например, https://picters.github.io/PicMusic/
let accessToken;
let player;
let deviceId;

// Функция для авторизации пользователя через Spotify
function authorizeSpotify() {
    const scope = 'streaming user-read-email user-read-private';
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location = authUrl;
}

// Функция для извлечения Access Token из URL после авторизации
function getAccessTokenFromUrl() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('access_token');
}

// Инициализация плеера Spotify Web Playback SDK
function initializePlayer() {
    window.onSpotifyWebPlaybackSDKReady = () => {
        player = new Spotify.Player({
            name: 'PicMusic Player',
            getOAuthToken: cb => { cb(accessToken); },
            volume: 0.5
        });

        // Событие готовности плеера
        player.addListener('ready', ({ device_id }) => {
            console.log('Устройство готово с ID', device_id);
            deviceId = device_id;
        });

        // Событие "не готово" для устройства
        player.addListener('not_ready', ({ device_id }) => {
            console.log('Устройство с ID ушло в оффлайн', device_id);
        });

        // Обработка ошибок
        player.addListener('initialization_error', ({ message }) => {
            console.error('Ошибка инициализации:', message);
        });
        player.addListener('authentication_error', ({ message }) => {
            console.error('Ошибка аутентификации:', message);
        });
        player.addListener('account_error', ({ message }) => {
            console.error('Ошибка аккаунта:', message);
        });
        player.addListener('playback_error', ({ message }) => {
            console.error('Ошибка воспроизведения:', message);
        });

        // Подключение плеера
        player.connect();
    };
}

// Функция для воспроизведения трека
async function playTrackOnSpotify(trackUri) {
    if (!deviceId) {
        console.error('Device ID не найден');
        return;
    }

    try {
        await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uris: [trackUri] })
        });
    } catch (error) {
        console.error("Ошибка при воспроизведении трека:", error);
    }
}

// Функция поиска треков
async function searchTracks(query) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        displayTracks(data.tracks.items);
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
}

// Функция для отображения найденных треков
function displayTracks(tracks) {
    const trackListElement = document.getElementById('track-list');
    trackListElement.innerHTML = '';

    tracks.forEach(track => {
        const trackItem = document.createElement('div');
        trackItem.classList.add('track-item');

        const cover = document.createElement('img');
        cover.src = track.album.images[0].url;
        cover.alt = `${track.name} Cover`;
        cover.classList.add('track-cover');

        const title = document.createElement('p');
        title.textContent = track.name;
        title.classList.add('track-title');

        const artist = document.createElement('p');
        artist.textContent = track.artists.map(a => a.name).join(', ');
        artist.classList.add('track-artist');

        trackItem.appendChild(cover);
        trackItem.appendChild(title);
        trackItem.appendChild(artist);

        // Воспроизведение трека при клике
        trackItem.addEventListener('click', () => {
            playTrackOnSpotify(track.uri);
        });

        trackListElement.appendChild(trackItem);
    });
}

// Инициализация play/pause кнопки
document.getElementById('play-pause').addEventListener("click", () => {
    if (player) {
        player.togglePlay().then(() => {
            console.log('Трек переключен');
        }).catch(error => {
            console.error('Ошибка при переключении трека:', error);
        });
    }
});

// Инициализация поиска треков
document.getElementById('search-bar').addEventListener('input', (e) => {
    const query = e.target.value;
    if (query) searchTracks(query);
});

// Проверка наличия Access Token и инициализация
window.addEventListener('load', () => {
    accessToken = getAccessTokenFromUrl();
    if (!accessToken) {
        authorizeSpotify();  // Если нет токена, перенаправляем на авторизацию
    } else {
        initializePlayer();  // Инициализируем плеер, если токен есть
        window.history.replaceState({}, document.title, "/PicMusic");  // Убираем токен из URL
    }
});
