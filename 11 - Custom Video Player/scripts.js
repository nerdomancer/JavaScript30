function skip(e) {
    video.currentTime +=  parseFloat(this.dataset.skip);
}

function playPause(e) {
    video.paused ? video.play() : video.pause();
}

function updatePlayPauseButton(e) {
    const icon = this.paused ? '►' : '❚❚';
    playPauseButton.textContent = icon;
}

const video = document.querySelector('video');
const playPauseButton = document.querySelector('.toggle');
const player = document.querySelector('.player');
const skipButtons = document.querySelectorAll('[data-skip]');

document.addEventListener('keypress', (e) => { if(e.code === 'Space') { playPause(e); }});
video.addEventListener('keypress', (e) => { if(e.code === 'Space') { playPause(e); }});
video.addEventListener('click', playPause);
video.addEventListener('pause', updatePlayPauseButton);
video.addEventListener('play', updatePlayPauseButton);
playPauseButton.addEventListener('click', playPause);
skipButtons.forEach(button => button.addEventListener('click', skip));

