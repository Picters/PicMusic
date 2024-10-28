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
const nextButton = document.getElementById("next-track");
const prevButton = document.getElementById("prev-track");
const trackTitle = document.getElementById("track-title");
const albumCover = document.getElementById("album-cover");

function loadTrack(index) {
    const track = trackList[index];
    audio.src = track.src;
    trackTitle.textContent = `${track.title} - ${track.artist}`;
    albumCover.src = track.cover;
}

function playTrack() {
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = "⏸️";
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;
    playPauseButton.textContent = "▶️";
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

// Создание списка треков и добавление событий для их воспроизведения
trackList.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = `${track.title} - ${track.artist}`;
    li.addEventListener("click", () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        playTrack();
    });
    trackListElement.appendChild(li);
});

// События для кнопок управления
playPauseButton.addEventListener("click", () => {
    isPlaying ? pauseTrack() : playTrack();
});

nextButton.addEventListener("click", nextTrack);
prevButton.addEventListener("click", prevTrack);

// Загрузка первого трека при старте
loadTrack(currentTrackIndex);
