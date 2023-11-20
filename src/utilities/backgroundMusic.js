import { Audio } from "expo-av";

// Function to setup the player
async function setupPlayer() {
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    playThroughEarpieceAndroid: false,
    staysActiveInBackground: false,
  });
}

// Function to load and play background music
async function playBackgroundMusic() {
  const { sound } = await Audio.Sound.createAsync(
    require("../assets/sounds/music/feed-the-machine-classic-arcade-game-116846.mp3"),
    {
      shouldPlay: true,
      isLooping: true,
    }
  );
  this.backgroundMusic = sound;
}

// Function to pause background music
async function pauseBackgroundMusic() {
  if (this.backgroundMusic) {
    await this.backgroundMusic.pauseAsync();
  }
}

// Function to stop and unload background music
async function stopBackgroundMusic() {
  if (this.backgroundMusic) {
    await this.backgroundMusic.stopAsync();
    await this.backgroundMusic.unloadAsync();
    this.backgroundMusic = null;
  }
}

// Call setupPlayer to initialize the player
setupPlayer();

export { playBackgroundMusic, pauseBackgroundMusic, stopBackgroundMusic, setupPlayer };
