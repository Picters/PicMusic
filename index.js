const express = require('express');
const fetch = require('node-fetch');
const app = express();

// ���� ���������� ��������� ��� Client ID � Client Secret Spotify
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

// ������� ��� ��������� access token �� Spotify
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

// �������� ��� ������ ������
app.get('/search', async (req, res) => {
    // ������������� ��������� CORS
    res.setHeader('Access-Control-Allow-Origin', '*');  // ��������� ������ � ������ ���������
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // ��������� ������ GET-�������

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
        console.error("������ ��� ������� � Spotify API:", error);
        res.status(500).json({ error: 'Failed to fetch data from Spotify API' });
    }
});

// ������ ������� �� ����� 3000 (��� ���������� ������������)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy ������ ������� �� ����� ${PORT}`);
});

module.exports = app;
