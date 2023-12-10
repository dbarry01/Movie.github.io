// Point 1: Create and call a JavaScript function that keeps track of the current day and time
function getCurrentDateTime() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    console.log('Current Date and Time:', formattedDate);
}

// Point 2: Send an alert using JavaScript
function showAlert() {
    alert('Hello, welcome to MoviesRUs!');
}

// Point 3: Use a Math method
function getRandomNumber() {
    const randomNum = Math.random() * 100; // Generates a random number between 0 and 100
    console.log('Random Number:', randomNum);
}

// Point 4: Delay one command or run a command at a specified interval
function delayedFunction() {
    console.log('This message will be logged after a delay.');
}

setTimeout(delayedFunction, 2000); // Executes delayedFunction after a 2000ms (2 seconds) delay

// Point 5: Convert between a number and a text
function convertNumberToString() {
    const number = 42;
    const textNumber = String(number);
    console.log('Converted Number to String:', textNumber);
}

// Point 6: Include a countdown function
function countdownTimer(seconds) {
    let remainingTime = seconds;

    // Get the countdown display element
    const countdownDisplay = document.getElementById('countdownDisplay');

    const intervalId = setInterval(function () {
        countdownDisplay.textContent = remainingTime + ' seconds remaining...';

        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(intervalId);
            countdownDisplay.textContent = 'Countdown complete!';
        }
    }, 1000); 
}

getCurrentDateTime();
showAlert();
getRandomNumber();
convertNumberToString();
countdownTimer(10000); // Start a countdown from 10 seconds