let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const buttons = document.querySelectorAll('.timer__button');
const custom = document.customForm;

function timer(seconds) {
    clearInterval(countDown);
    displayTime(seconds);
    let now = Date.now();
    let then = now + seconds * 1000;
    
    countDown = setInterval(() => {
        let secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
        
        displayTime(secondsLeft);
    }, 1000);
}

function displayTime(secondsLeft) {
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    let text = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timerDisplay.textContent = text;
}

function setCustomTimer(e) {
    e.preventDefault();
    let mins = this.minutes.value;
    this.reset();
    timer(mins * 60);
}

buttons.forEach(button => button.addEventListener('click', function(e) { timer(this.dataset.time); }));
custom.addEventListener('submit', setCustomTimer)
