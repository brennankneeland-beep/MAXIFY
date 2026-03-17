/**
 * Music Intelligence Service
 * Responsible for Velocity -> BPM mapping and Location logic 
 */

const getMusicContext = (velocity) => {
    // Convert m/s to approximate activity tiers
    if (velocity <= 1.5) {
      return { target_bpm: 90, target_energy: 0.3, mood: 'Relaxed' }; // Walking
    } else if (velocity > 1.5 && velocity <= 3.5) {
      return { target_bpm: 130, target_energy: 0.7, mood: 'Active' }; // Jogging
    } else {
      return { target_bpm: 170, target_energy: 0.9, mood: 'Intense' }; // Sprinting/Cycling
    }
  };
  
  module.exports = { getMusicContext };