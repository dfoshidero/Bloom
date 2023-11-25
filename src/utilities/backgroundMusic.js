import { Audio } from "expo-av";

// Define an array of song files
const songs = [
  require("../assets/sounds/music/8-bit-arcade.mp3"),
  require("../assets/sounds/music/dial-up-blues-classic-arcade-game.mp3"),
  require("../assets/sounds/music/feed-the-machine-classic-arcade-game.mp3"),
  require("../assets/sounds/music/short-circuits-classic-arcade-game.mp3"),
];

// Function to setup the player
async function setupPlayer() {
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    playThroughEarpieceAndroid: false,
    staysActiveInBackground: false,
    volume: 0.2
  });
}

// Function to play a random background music
async function playRandomBackgroundMusic() {
  // Select a random song from the array
  const randomIndex = Math.floor(Math.random() * songs.length);
  const randomSong = songs[randomIndex];

  const { sound } = await Audio.Sound.createAsync(randomSong, {
    shouldPlay: true,
    isLooping: true,
    volume: 0.2, // Set the initial volume to 10% (low volume)
  });
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

export {
  playRandomBackgroundMusic,
  pauseBackgroundMusic,
  stopBackgroundMusic,
  setupPlayer,
};
