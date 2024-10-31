﻿const clientId = '23acb15671f7460da1ef99503d7f96c4';
const clientSecret = 'bfd2fbe5173146998c2dc14e221cb402';

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
            playTrack(track);
        });

        trackListElement.appendChild(trackItem);
    });
}

function playTrack(track) {
    const audio = new Audio(track.preview_url);
    audio.play();
    const albumCover = document.getElementById('album-cover');
    const trackNameElement = document.getElementById('track-name');
    const trackArtistElement = document.getElementById('track-artist');

    albumCover.src = track.album.images[0].url;
    trackNameElement.textContent = track.name;
    trackArtistElement.textContent = track.artists.map(a => a.name).join(', ');
}

document.getElementById('search-bar').addEventListener('input', (e) => {
    const query = e.target.value;
    if (query) searchTracks(query);
});
