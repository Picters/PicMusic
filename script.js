const clientId = '23acb15671f7460da1ef99503d7f96c4';
const redirectUri = 'https://ваш-сайт/PicMusic/';  // Ваш Redirect URI, например, https://picters.github.io/PicMusic/
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

// Функция ожидания deviceId
function waitForDeviceId() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            if (deviceId) {
                clearInterval(interval);
                resolve();
            }
        }, 100); // Проверка каждые 100 мс

        // Тайм-аут для предотвращения бесконечного ожидания
        setTimeout(() => {
            clearInterval(interval);
            reject(new Error('Device ID не найден после ожидания'));
        }, 5000); // Тайм-аут 5 секунд
    });
}

// Инициализация плеера Spotify Web Playback SDK
function initializePlayer() {
    return new Promise((resolve, reject) => {
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
                resolve();  // Resolve промис, когда deviceId получен
            });

            // Обработка ошибок
            player.addListener('initialization_error', ({ message }) => {
                console.error('Ошибка инициализации:', message);
                reject(message);
            });
            player.addListener('authentication_error', ({ message }) => {
                console.error('Ошибка аутентификации:', message);
                reject(message);
            });
            player.addListener('account_error', ({ message }) => {
                console.error('Ошибка аккаунта:', message);
                reject(message);
            });
            player.addListener('playback_error', ({ message }) => {
                console.error('Ошибка воспроизведения:', message);
            });

            // Подключение плеера
            player.connect();
        };
    });
}

// Функция для воспроизведения трека с проверкой deviceId
async function playTrackOnSpotify(trackUri) {
    try {
        await waitForDeviceId(); // Ждем установки deviceId

        await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uris: [trackUri] })
        });
        console.log("Трек успешно воспроизведен");
    } catch (error) {
        console.error("Ошибка при воспроизведении трека:", error);
    }
}

// Инициализация play/pause кнопки
document.getElementById('play-pause').addEventListener("click", async () => {
    if (player) {
        await player.togglePlay().catch(error => {
            console.error('Ошибка при переключении трека:', error);
        });
    }
});

// Обработка поиска треков и воспроизведения
document.getElementById('search-bar').addEventListener('input', async (e) => {
    const query = e.target.value;
    if (query) await searchTracks(query);
});

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

// Функция для отображения найденных треков и добавления клика для воспроизведения
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

        // Воспроизведение трека при клике на него
        trackItem.addEventListener('click', () => {
            playTrackOnSpotify(track.uri);
        });

        trackListElement.appendChild(trackItem);
    });
}

// Проверка наличия Access Token и инициализация
window.addEventListener('load', async () => {
    accessToken = getAccessTokenFromUrl();
    if (!accessToken) {
        authorizeSpotify();  // Если нет токена, перенаправляем на авторизацию
    } else {
        try {
            await initializePlayer();  // Ждем готовности плеера
        } catch (error) {
            console.error("Не удалось инициализировать плеер:", error);
        }
        window.history.replaceState({}, document.title, "/PicMusic");  // Убираем токен из URL
    }
});
