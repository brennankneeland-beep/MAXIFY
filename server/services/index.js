const express = require('express');
const { getMusicContext } = require('./musicIntelligence');
const { getRecommendations } = require('./spotifyClient'); 

const app = express();
app.use(express.json());

// This is the endpoint Frontend B should call i think
app.post('/api/suggest', async (req, res) => {
  try {
    const { velocity, accessToken } = req.body;

    // 1. Get the target musical vibe
    const context = getMusicContext(velocity);

    // 2. Get real songs from Spotify
    const tracks = await getRecommendations(accessToken, context);

    // 3. Send it all back to the app
    res.json({
      activity: context.mood,
      bpm: context.target_bpm,
      songs: tracks.map(t => ({
        name: t.name,
        artist: t.artists[0].name,
        uri: t.uri
      }))
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch music context" });
  }
});

app.listen(3000, () => console.log('Music Intelligence API running on port 3000'));