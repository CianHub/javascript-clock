const secondHand = document.querySelector('.second-hand')

function setDate() {
    // Gets the current minutes seconds

    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

}

// Executes the function every second
setInterval(setDate, 1000)