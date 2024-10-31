const sidebar = document.querySelector('.sidebar');
const trackListElement = document.getElementById('track-list');
const placeholder = document.getElementById('placeholder');
const searchBar = document.getElementById('search-bar');
let currentTrackIndex = null;
let isSeeking = false;

const audio = new Audio();
const playPauseButton = document.getElementById("play-pause");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const albumCover = document.getElementById("album-cover");
const trackNameElement = document.getElementById("track-name");
const trackArtistElement = document.getElementById("track-artist");
const seekBar = document.getElementById("seek-bar");
const seekBarFill = document.createElement("div");
seekBarFill.classList.add("seek-bar-fill");
seekBar.parentNode.appendChild(seekBarFill);

async function searchTracks(query) {
    const response = await fetch(`https://picmusic-proxy.vercel.app/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    displayTracks(data.tracks.items);
}

function displayTracks(tracks) {
    trackListElement.innerHTML = '';
    placeholder.style.display = tracks.length ? 'none' : 'block';

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
            playTrack(track);
        });

        trackListElement.appendChild(trackItem);
    });
}

function playTrack(track) {
    audio.src = track.preview_url;
    audio.play();
    albumCover.src = track.album.images[0].url;
    trackNameElement.textContent = track.name;
    trackArtistElement.textContent = track.artists.map(a => a.name).join(', ');
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
}

// Ссылка на элементы
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');

// Функция для скрытия экрана загрузки
function hideLoadingScreen() {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
}

// Запуск функции hideLoadingScreen после загрузки страницы
window.addEventListener('load', hideLoadingScreen);

// Обновление поиска по вводу
searchBar.addEventListener('input', (e) => {
    const query = e.target.value;
    if (query) searchTracks(query);
});

// Контроль воспроизведения
playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
    } else {
        audio.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
    }
});
