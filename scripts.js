// Rotate function for albums
const albumsContainer = document.querySelector('.albums-container');
window.addEventListener('scroll', () => {
    const albumsSection = document.getElementById('albums');
    const rect = albumsSection.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        albumsContainer.style.transform = `rotateY(${window.scrollY % 360}deg)`;
    }
});

// Music Player Controls
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const audio = new Audio(); // Placeholder for an audio element

let isPlaying = false;
const tracks = [
    'track1.mp3', // Replace with actual track paths
    'track2.mp3',
    'track3.mp3'
];
let currentTrackIndex = 0;

audio.src = tracks[currentTrackIndex];

playButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playButton.textContent = 'Play';
    } else {
        audio.play();
        playButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentTrackIndex];
    if (isPlaying) audio.play();
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audio.src = tracks[currentTrackIndex];
    if (isPlaying) audio.play();
});

// Volume Control
const volumeControl = document.getElementById('volume');
volumeControl.addEventListener('input', (event) => {
    audio.volume = event.target.value / 100;
});

// Seek Bar
const seekBar = document.getElementById('seek');
audio.addEventListener('timeupdate', () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
});

seekBar.addEventListener('input', (event) => {
    audio.currentTime = (event.target.value / 100) * audio.duration;
});
