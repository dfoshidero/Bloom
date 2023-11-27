import { Audio } from "expo-av";

// Define an array of song files
const songs = [
  require("../assets/sounds/music/8-bit-arcade.mp3"),
  require("../assets/sounds/music/feed-the-machine-classic-arcade-game.mp3"),
  require("../assets/sounds/music/short-circuits-classic-arcade-game.mp3"),
];

let lastPlayedIndex = null; // Variable to store the index of the last played song

// Function to setup the player
async function setupPlayer() {
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    playThroughEarpieceAndroid: false,
    staysActiveInBackground: false,
    volume: 0.2,
  });
}

// Function to play a random background music
async function playRandomBackgroundMusic() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * songs.length);
  } while (randomIndex === lastPlayedIndex); // Ensure the new song is different from the last played song

  lastPlayedIndex = randomIndex; // Update the last played song index
  const randomSong = songs[randomIndex];

  if (this.backgroundMusic) {
    await this.backgroundMusic.unloadAsync(); // Unload the current song if any
  }

  const { sound } = await Audio.Sound.createAsync(randomSong, {
    shouldPlay: true,
    isLooping: false, // Set isLooping to false
    volume: 0.2,
  });
  this.backgroundMusic = sound;

  // Set an event listener to play a new song after the current song finishes
  this.backgroundMusic.setOnPlaybackStatusUpdate(async (status) => {
    if (status.didJustFinish) {
      await playRandomBackgroundMusic();
    }
  });
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
