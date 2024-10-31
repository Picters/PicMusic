const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Ваши переменные окружения для Client ID и Client Secret Spotify
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

// Функция для получения access token от Spotify
async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    return data.access_token;
}

// Эндпоинт для поиска треков
app.get('/search', async (req, res) => {
    // Устанавливаем заголовки CORS
    res.setHeader('Access-Control-Allow-Origin', '*');  // Разрешает доступ с любого источника
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // Разрешает только GET-запросы

    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    try {
        const accessToken = await getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Ошибка при запросе к Spotify API:", error);
        res.status(500).json({ error: 'Failed to fetch data from Spotify API' });
    }
});

// Запуск сервера на порту 3000 (для локального тестирования)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy сервер запущен на порту ${PORT}`);
});

module.exports = app;
