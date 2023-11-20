import Sound from "react-native-sound";

// Enable playback in silence mode (iOS only)
Sound.setCategory("Playback");

let backgroundMusic = null;

// Function to load and play background music
function playBackgroundMusic() {
  backgroundMusic = new Sound(
    "background_music.mp3",
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log("Failed to load the sound", error);
        return;
      }
      // Play the sound in a loop
      backgroundMusic.setNumberOfLoops(-1);
      backgroundMusic.play();
    }
  );
}

// Function to pause background music
function pauseBackgroundMusic() {
  if (backgroundMusic) {
    backgroundMusic.pause();
  }
}

// Function to stop and unload background music
function stopBackgroundMusic() {
  if (backgroundMusic) {
    backgroundMusic.stop(() => {
      backgroundMusic.release();
      backgroundMusic = null;
    });
  }
}

export { playBackgroundMusic, pauseBackgroundMusic, stopBackgroundMusic };
