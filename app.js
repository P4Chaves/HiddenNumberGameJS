alert('Starting the hidden number game.');
let maxNumber = 200;
let hiddenNumber = parseInt(Math.random() * maxNumber + 1);
console.log(hiddenNumber);

let attempts = 0;
let guess = parseInt(prompt(`Choose a number between 1 and ${maxNumber}:`));
attempts++;

while (guess !== hiddenNumber) {
    if (hiddenNumber > guess) {
        alert(`The hidden number is greater than ${guess}`);
    } else {
        alert(`The hidden number is smaller than ${guess}`);
    }
    guess = parseInt(prompt(`Choose a number between 1 and ${maxNumber}:`));
    attempts++;
}

let wordAttempt = attempts > 1 ? 'attempts' : 'attempt';
alert(`Nice! You found the hidden number: ${hiddenNumber} in ${attempts} ${wordAttempt}.`);