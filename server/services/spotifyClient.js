const getRecommendations = async (accessToken, context) => {
    // Define a mapping of moods to 5 genre seeds
    const genreMap = {
      'Relaxed': 'indie,acoustic,chill,ambient,folk',
      'Active': 'pop,dance,house,electro,groove',
      'Intense': 'work-out,techno,drum-and-bass,hip-hop,hardstyle'
    };
  
    const seeds = genreMap[context.mood] || 'pop';
  
    try {
      const response = await axios.get('https://api.spotify.com/v1/recommendations', {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          limit: 5,
          seed_genres: seeds, // Using the full 5-seed capacity
          target_tempo: context.target_bpm,
          target_energy: context.target_energy,
          min_popularity: 50 // Ensures the user doesn't get super obscure tracks while running
        }
      });
      return response.data.tracks;
    } catch (error) {
      console.error("Spotify API Error:", error.message);
      return [];
    }
  };