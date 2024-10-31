const clientId = '23acb15671f7460da1ef99503d7f96c4';
const clientSecret = 'bfd2fbe5173146998c2dc14e221cb402';

let currentTrack = null;
let audio = new Audio();

async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
}

async function searchTracks(query) {
    try {
        const accessToken = await getAccessToken();
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

        trackItem.addEventListener('click', () => {
            playTrack(track, trackItem);
        });

        trackListElement.appendChild(trackItem);
    });
}

function playTrack(track, trackItem) {
    // Снять выделение с предыдущего трека
    if (currentTrack) {
        currentTrack.classList.remove('playing');
        audio.pause();
    }

    // Установить новый трек и выделение
    currentTrack = trackItem;
    currentTrack.classList.add('playing');
    audio.src = track.preview_url;
    audio.play();

    // Обновить информацию о треке в плеере
    document.getElementById('album-cover').src = track.album.images[0].url;
    document.getElementById('track-name').textContent = track.name;
    document.getElementById('track-artist').textContent = track.artists.map(a => a.name).join(', ');

    // Обновление иконок play/pause
    document.getElementById('play-icon').style.display = "none";
    document.getElementById('pause-icon').style.display = "block";

    // Сбросить и обновить полоску seek bar
    const seekBar = document.getElementById("seek-bar");
    seekBar.value = 0;
    document.querySelector('.seek-bar-fill').style.width = "0%";

    // Обновлять seek bar во время проигрывания
    audio.ontimeupdate = () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        seekBar.value = progress;
        document.querySelector('.seek-bar-fill').style.width = `${progress}%`;

        // Обновляем текущие и общие значения времени
        document.getElementById("current-time").textContent = formatTime(audio.currentTime);
        document.getElementById("total-time").textContent = formatTime(audio.duration);
    };
}

// Форматирование времени для отображения
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Кнопка play/pause
document.getElementById('play-pause').addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        document.getElementById('play-icon').style.display = "none";
        document.getElementById('pause-icon').style.display = "block";
    } else {
        audio.pause();
        document.getElementById('play-icon').style.display = "block";
        document.getElementById('pause-icon').style.display = "none";
    }
});

// Перемотка по seek bar
document.getElementById('seek-bar').addEventListener('input', (e) => {
    const seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Обработчик поиска
document.getElementById('search-bar').addEventListener('input', (e) => {
    const query = e.target.value;
    if (query) searchTracks(query);
});

// Сброс иконки play/pause при завершении трека
audio.addEventListener('ended', () => {
    if (currentTrack) {
        currentTrack.classList.remove('playing');
    }
    document.getElementById('play-icon').style.display = "block";
    document.getElementById('pause-icon').style.display = "none";
    document.getElementById("seek-bar").value = 0;
    document.querySelector('.seek-bar-fill').style.width = "0%";
    currentTrack = null;
});
