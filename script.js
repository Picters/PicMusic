const trackList = [
    { title: "вечно", artist: "Squate", cover: "tracks/Squate/cover1.jpg", src: "tracks/Squate/track1.mp3" },
    { title: "токио", artist: "Squate", cover: "tracks/Squate/cover2.jpg", src: "tracks/Squate/track2.mp3" },
    { title: "не знаешь", artist: "Squate", cover: "tracks/Squate/cover3.jpg", src: "tracks/Squate/track3.mp3" },
    { title: "Манипулятор", artist: "5mewmet", cover: "tracks/5mewmet/cover1.jpg", src: "tracks/5mewmet/track1.mp3" },
    { title: "Мы не те", artist: "5mewmet", cover: "tracks/5mewmet/cover2.jpg", src: "tracks/5mewmet/track2.mp3" },
    { title: "Мефистофель", artist: "5mewmet", cover: "tracks/5mewmet/cover3.jpg", src: "tracks/5mewmet/track3.mp3" },
    { title: "Ореол", artist: "5mewmet", cover: "tracks/5mewmet/cover4.jpg", src: "tracks/5mewmet/track4.mp3" },
    { title: "Витя", artist: "5mewmet", cover: "tracks/5mewmet/cover5.jpg", src: "tracks/5mewmet/track5.mp3" },
    { title: "Венерический букетик", artist: "5mewmet", cover: "tracks/5mewmet/cover6.jpg", src: "tracks/5mewmet/track6.mp3" },
    { title: "SQUIRT GAME", artist: "5mewmet", cover: "tracks/5mewmet/cover7.jpg", src: "tracks/5mewmet/track7.mp3" },
    { title: "=)", artist: "5mewmet", cover: "tracks/5mewmet/cover8.jpg", src: "tracks/5mewmet/track8.mp3" },
    { title: "разноцветные таблетки", artist: "5mewmet", cover: "tracks/5mewmet/cover9.jpg", src: "tracks/5mewmet/track9.mp3" },
    { title: "PANACEA", artist: "5mewmet", cover: "tracks/5mewmet/cover10.jpg", src: "tracks/5mewmet/track10.mp3" },
    { title: "GANGBANG feat babypills", artist: "5mewmet", cover: "tracks/5mewmet/cover11.jpg", src: "tracks/5mewmet/track11.mp3" },
    { title: "MOET&CHANDON", artist: "5mewmet", cover: "tracks/5mewmet/cover12.jpg", src: "tracks/5mewmet/track12.mp3" },
    { title: "Zazagartner", artist: "5mewmet", cover: "tracks/5mewmet/cover13.jpg", src: "tracks/5mewmet/track13.mp3" },
    { title: "Очередная малолетко", artist: "5mewmet", cover: "tracks/5mewmet/cover14.jpg", src: "tracks/5mewmet/track14.mp3" },
    { title: "покажи мне свои :т", artist: "5mewmet", cover: "tracks/5mewmet/cover15.jpg", src: "tracks/5mewmet/track15.mp3" },
    { title: "Ш", artist: "5mewmet", cover: "tracks/5mewmet/cover16.jpg", src: "tracks/5mewmet/track16.mp3" },
    { title: "Кетаминовая яма", artist: "5mewmet", cover: "tracks/5mewmet/cover17.jpg", src: "tracks/5mewmet/track17.mp3" },
    { title: "BIM BAM BOOM", artist: "5mewmet", cover: "tracks/5mewmet/cover18.jpg", src: "tracks/5mewmet/track18.mp3" },
    { title: "Я так обожаю", artist: "5mewmet", cover: "tracks/5mewmet/cover19.jpg", src: "tracks/5mewmet/track19.mp3" },
    { title: "Ты знаешь)", artist: "5mewmet", cover: "tracks/5mewmet/cover20.jpg", src: "tracks/5mewmet/track20.mp3" }
];

const sidebar = document.querySelector('.sidebar');
const trackListElement = document.getElementById('track-list');
const placeholder = document.getElementById('placeholder');
let currentTrackIndex = null;

const audio = new Audio();
const playPauseButton = document.getElementById("play-pause");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const nextButton = document.getElementById("next-track");
const prevButton = document.getElementById("prev-track");
const albumCover = document.getElementById("album-cover");
const trackTitle = document.getElementById("track-title");

function toggleSidebar() {
    sidebar.classList.toggle('open');
}

function loadArtists() {
    const artists = [...new Set(trackList.map(track => track.artist))];
    artists.forEach(artist => {
        const artistItem = document.createElement("li");
        artistItem.textContent = artist;
        artistItem.addEventListener("click", () => loadTracksForArtist(artist));
        sidebar.querySelector('.artist-list').appendChild(artistItem);
    });
}

function loadTracksForArtist(artist) {
    trackListElement.innerHTML = '';
    placeholder.style.display = 'none';
    trackListElement.style.display = 'flex';

    const artistTracks = trackList.filter(track => track.artist === artist);
    artistTracks.forEach((track) => {
        const trackItem = document.createElement("div");
        trackItem.classList.add("track-item");

        const cover = document.createElement("img");
        cover.src = track.cover;
        cover.alt = `${track.title} Cover`;
        cover.classList.add("track-cover");

        const title = document.createElement("p");
        title.textContent = track.title;
        title.classList.add("track-title");

        const artistName = document.createElement("p");
        artistName.textContent = track.artist;
        artistName.classList.add("track-artist");

        trackItem.appendChild(cover);
        trackItem.appendChild(title);
        trackItem.appendChild(artistName);

        trackItem.addEventListener("click", () => {
            currentTrackIndex = trackList.indexOf(track);
            loadTrack(currentTrackIndex);
            playTrack();
        });

        trackListElement.appendChild(trackItem);
    });
}

function loadTrack(index) {
    if (index === null || index < 0 || index >= trackList.length) {
        // Показать обложку "No Track" если нет треков
        albumCover.src = "icons/notrack.png";
        trackTitle.textContent = "No Track Playing";
        audio.src = "";
        return;
    }

    const track = trackList[index];
    audio.src = track.src;
    trackTitle.textContent = `${track.title} - ${track.artist}`;
    albumCover.src = track.cover;
    audio.load();
}

function playTrack() {
    if (audio.src) {
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
    }
}

function pauseTrack() {
    audio.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
}

function nextTrack() {
    if (currentTrackIndex !== null) {
        currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
        loadTrack(currentTrackIndex);
        playTrack();
    }
}

function prevTrack() {
    if (currentTrackIndex !== null) {
        currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
        loadTrack(currentTrackIndex);
        playTrack();
    }
}

// Обработчики событий
playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

nextButton.addEventListener("click", nextTrack);
prevButton.addEventListener("click", prevTrack);

audio.addEventListener("ended", nextTrack);

// Инициализация
loadArtists();
loadTrack(null);  // Загрузка обложки "No Track" по умолчанию
