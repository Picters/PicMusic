const trackList = [
    { title: "вечно", artist: "Squate", cover: "tracks/cover1.jpg", src: "tracks/track1.mp3" },
    { title: "токио", artist: "Squate", cover: "tracks/cover2.jpg", src: "tracks/track2.mp3" },
    { title: "не знаешь", artist: "Squate", cover: "tracks/cover3.jpg", src: "tracks/track3.mp3" }
];

let currentTrackIndex = 0;
let isPlaying = false;
const audio = new Audio();

const trackListElement = document.getElementById("track-list");
const playPauseButton = document.getElementById("play-pause");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const nextButton = document.getElementById("next-track");
const prevButton = document.getElementById("prev-track");
const trackTitle = document.getElementById("track-title");
const albumCover = document.getElementById("album-cover");

function loadTrack(index) {
    const track = trackList[index];
    audio.src = track.src;
    trackTitle.textContent = `${track.title} - ${track.artist}`;
    albumCover.src = track.cover;

    // Проверяем путь к обложке в консоли
    console.log(`Загрузка обложки: ${track.cover}`);
}

function playTrack() {
    audio.play();
    isPlaying = true;
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

// Создание квадратных блоков для треков
trackList.forEach((track, index) => {
    const trackItem = document.createElement("div");
    trackItem.classList.add("track-item");
    
    const cover = document.createElement("img");
    cover.src = track.cover;
    cover.alt = `${track.title} Cover`;
    cover.classList.add("track-cover");

    const title = document.createElement("p");
    title.textContent = track.title;
    title.classList.add("track-title");

    const artist = document.createElement("p");
    artist.textContent = track.artist;
    artist.classList.add("track-artist");

    trackItem.appendChild(cover);
    trackItem.appendChild(title);
    trackItem.appendChild(artist);

    trackItem.addEventListener("click", () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        playTrack();
    });

    trackListElement.appendChild(trackItem);
});

// События для кнопок управления
playPauseButton.addEventListener("click", () => {
    isPlaying ? pauseTrack() : playTrack();
});

nextButton.addEventListener("click", nextTrack);
prevButton.addEventListener("click", prevTrack);

// Загрузка первого трека при старте
loadTrack(currentTrackIndex);
