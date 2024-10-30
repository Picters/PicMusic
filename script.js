const trackList = [
    { title: "Вечно", artist: "Squate", cover: "tracks/Squate/cover1.jpg", src: "tracks/Squate/track1.mp3" },
    { title: "Токио", artist: "Squate", cover: "tracks/Squate/cover2.jpg", src: "tracks/Squate/track2.mp3" },
    { title: "Не знаешь", artist: "Squate", cover: "tracks/Squate/cover3.jpg", src: "tracks/Squate/track3.mp3" },
    { title: "Покойник", artist: "Squate", cover: "tracks/Squate/cover4.jpg", src: "tracks/Squate/track4.mp3" },
    { title: "По Судьбе", artist: "Squate", cover: "tracks/Squate/cover5.jpg", src: "tracks/Squate/track5.mp3" },
    { title: "Сердце", artist: "Squate", cover: "tracks/Squate/cover6.jpg", src: "tracks/Squate/track6.mp3" },
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
    { title: "Ты знаешь)", artist: "5mewmet", cover: "tracks/5mewmet/cover20.jpg", src: "tracks/5mewmet/track20.mp3" },
    { title: "Последний трек", artist: "Alfapoid", cover: "tracks/Alfapoid/cover1.jpg", src: "tracks/Alfapoid/track1.mp3" },
    { title: "Сегодня", artist: "Alfapoid", cover: "tracks/Alfapoid/cover2.jpg", src: "tracks/Alfapoid/track2.mp3" },
    { title: "19+", artist: "Alfapoid", cover: "tracks/Alfapoid/cover3.jpg", src: "tracks/Alfapoid/track3.mp3" },
    { title: "Лунопарк", artist: "Alfapoid", cover: "tracks/Alfapoid/cover4.jpg", src: "tracks/Alfapoid/track4.mp3" },
    { title: "Где нет дождя", artist: "Alfapoid", cover: "tracks/Alfapoid/cover5.jpg", src: "tracks/Alfapoid/track5.mp3" },
    { title: "17 плюс", artist: "Alfapoid", cover: "tracks/Alfapoid/cover6.jpg", src: "tracks/Alfapoid/track6.mp3" },
    { title: "Новое утро", artist: "Alfapoid", cover: "tracks/Alfapoid/cover7.jpg", src: "tracks/Alfapoid/track7.mp3" },
    { title: "Больше чем курить", artist: "Alfapoid", cover: "tracks/Alfapoid/cover8.jpg", src: "tracks/Alfapoid/track8.mp3" },
    { title: "Как ты", artist: "Alfapoid", cover: "tracks/Alfapoid/cover9.jpg", src: "tracks/Alfapoid/track9.mp3" },
    { title: "16 плюс", artist: "Alfapoid", cover: "tracks/Alfapoid/cover10.jpg", src: "tracks/Alfapoid/track10.mp3" },
    { title: "INTRO", artist: "Alfapoid", cover: "tracks/Alfapoid/cover11.jpg", src: "tracks/Alfapoid/track11.mp3" },
    { title: "Баллада", artist: "Xcho & Мот", cover: "tracks/Xcho & Мот/cover1.jpg", src: "tracks/Xcho & Мот/track1.mp3" },
    { title: "Лампочки 2.0", artist: "Galibri & Mavik", cover: "tracks/Galibri & Mavik/cover1.jpg", src: "tracks/Galibri & Mavik/track1.mp3" },
    { title: "Ромашки", artist: "Galibri & Mavik", cover: "tracks/Galibri & Mavik/cover2.jpg", src: "tracks/Galibri & Mavik/track2.mp3" },
    { title: "Федерико Феллини", artist: "Galibri & Mavik", cover: "tracks/Galibri & Mavik/cover3.jpg", src: "tracks/Galibri & Mavik/track3.mp3" },
    { title: "WHITE MONEY", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track1.mp3" },
    { title: "KENNY", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track2.mp3" },
    { title: "Kid Cut", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track3.mp3" },
    { title: "NEW BOYS", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track4.mp3" },
    { title: "Enigma", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track5.mp3" },
    { title: "Volga Bpan", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track6.mp3" },
    { title: "6 Kadrov", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track7.mp3" },
    { title: "Zachem (Jerk Remix)", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track8.mp3" },
    { title: "VIP", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track9.mp3" },
    { title: "Bpan", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track10.mp3" },
    { title: "Unreleased Mix", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track11.mp3" },
    { title: "SARRY", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track12.mp3" },
    { title: "Pomenyal", artist: "Unki", cover: "tracks/Unki/cover1.jpg", src: "tracks/Unki/track13.mp3" },
    { title: "Antidote", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track1.mp3" },
    { title: "Beibs In The Trap ft Nav", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track2.mp3" },
    { title: "Blocka La Flame", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track3.mp3" },
    { title: "Coordinate", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track4.mp3" },
    { title: "Drugs You Should Try It", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track5.mp3" },
    { title: "ESCAPE PLAN", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track6.mp3" },
    { title: "First Take", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track7.mp3" },
    { title: "God Level", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track8.mp3" },
    { title: "Goosebumps", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track9.mp3" },
    { title: "LOVE", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track10.mp3" },
    { title: "My Ex Best Friend", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track11.mp3" },
    { title: "Palm Trees", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track12.mp3" },
    { title: "Pray 4 Love", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track13.mp3" },
    { title: "Quintana", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track14.mp3" },
    { title: "Serenade", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track15.mp3" },
    { title: "sweet sweet", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track16.mp3" },
    { title: "The Ends", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track17.mp3" },
    { title: "Through The Late Night", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track18.mp3" },
    { title: "Upper Echelon", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track19.mp3" },
    { title: "Watch", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track20.mp3" },
    { title: "Way Back", artist: "Travi$ Scott", cover: "tracks/Travi$ Scott/cover1.jpg", src: "tracks/Travi$ Scott/track21.mp3" },
    { title: "Любимая моя", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track1.mp3" },
    { title: "Мудаки", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track2.mp3" },
    { title: "Самокопание", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track3.mp3" },
    { title: "Ты станешь моей", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track4.mp3" },
    { title: "Бросил", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track5.mp3" },
    { title: "Главное ты стал никем", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track6.mp3" },
    { title: "Никогда НЕ", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track7.mp3" },
    { title: "Главное вместе", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track8.mp3" },
    { title: "Вилли Вонка", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track9.mp3" },
    { title: "Планета Х", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track10.mp3" },
    { title: "Рассказчик", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track11.mp3" },
    { title: "Оставишь в пыли", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track12.mp3" },
    { title: "Последний Хикка умирает влюблённым", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track13.mp3" },
    { title: "Незаметный я", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track14.mp3" },
    { title: "Прощайте тигры", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track15.mp3" },
    { title: "Воспоминания нужно сжигать", artist: "Vspak", cover: "tracks/Vspak/cover1.jpg", src: "tracks/Vspak/track16.mp3" }
];

const sidebar = document.querySelector('.sidebar');
const trackListElement = document.getElementById('track-list');
const placeholder = document.getElementById('placeholder');
let currentTrackIndex = null; // Текущий индекс трека
let currentArtist = null; // Текущий артист
let isSeeking = false; // Флаг для отслеживания перемотки

const audio = new Audio();
const playPauseButton = document.getElementById("play-pause");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const nextButton = document.getElementById("next-track");
const prevButton = document.getElementById("prev-track");
const albumCover = document.getElementById("album-cover");
const trackNameElement = document.getElementById("track-name");
const trackArtistElement = document.getElementById("track-artist");
const seekBar = document.getElementById("seek-bar");
const seekBarContainer = document.querySelector(".seek-bar-container");
const seekBarFill = document.createElement("div");
seekBarFill.classList.add("seek-bar-fill");
seekBarContainer.appendChild(seekBarFill);

function toggleSidebar() {
    sidebar.classList.toggle('open');
    document.querySelector('.main-container').classList.toggle('fade'); // Плавное исчезновение/появление
}

window.onload = function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Устанавливаем display: none у основного контента перед загрузкой
    mainContent.style.display = 'none';

    // Убираем экран загрузки после завершения анимации
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block'; // Показываем основной контент
        mainContent.style.opacity = '1'; // Плавно показываем его
    }, 3500); // Ждем завершения анимации (2.5 сек вращения + 1 сек плавного исчезновения)
};

function loadAllTracks() {
    trackListElement.innerHTML = '';
    placeholder.style.display = 'none';
    trackListElement.style.display = 'flex';

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

        const artistName = document.createElement("p");
        artistName.textContent = track.artist;
        artistName.classList.add("track-artist");

        trackItem.appendChild(cover);
        trackItem.appendChild(title);
        trackItem.appendChild(artistName);

        trackItem.addEventListener("click", () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            playTrack();
        });

        trackListElement.appendChild(trackItem);
    });
}

function loadTrack(index) {
    if (index === null || index < 0 || index >= trackList.length) {
        albumCover.src = "icons/notrack.png";
        trackNameElement.textContent = "No Track Playing";
        trackArtistElement.textContent = "Unknown Artist";
        removeActiveClass();
        return;
    }

    const track = trackList[index];
    audio.src = track.src;
    trackNameElement.textContent = track.title;
    trackArtistElement.textContent = track.artist;
    albumCover.src = track.cover;
    seekBar.value = 0; // Сброс ползунка
    seekBarFill.style.width = "0%";
    audio.load();
    highlightActiveTrack();
}

function highlightActiveTrack() {
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach((item, index) => {
        if (index === currentTrackIndex) {
            item.classList.add('active'); // Добавляем класс для подсветки
        } else {
            item.classList.remove('active'); // Удаляем класс у остальных
        }
    });
}

function removeActiveClass() {
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach(item => {
        item.classList.remove('active'); // Удаляем класс у всех треков
    });
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

// Обновление ползунка и заполнения при проигрывании трека
audio.addEventListener("timeupdate", () => {
    if (!isSeeking) { // Обновляем ползунок только если не перематываем
        const progress = (audio.currentTime / audio.duration) * 100 || 0;
        seekBar.value = progress;
        seekBarFill.style.width = `${progress}%`;
    }
});

// Обработка перемещения ползунка для перемотки трека
seekBar.addEventListener("input", () => {
    const seekTime = (seekBar.value / 100) * audio.duration;
    seekBarFill.style.width = `${seekBar.value}%`;
    audio.currentTime = seekTime;
});

// Приостановка трека при начале перемотки
seekBar.addEventListener("mousedown", () => {
    isSeeking = true;
    audio.pause();
});

// Возобновление трека после окончания перемотки
seekBar.addEventListener("mouseup", () => {
    isSeeking = false;
    audio.play();
});

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
loadAllTracks();
loadTrack(null);  // Загрузка обложки "No Track" по умолчанию

