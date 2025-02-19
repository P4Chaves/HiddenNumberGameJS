alert('Starting the hidden number game.');
let hiddenNumber = 4;
console.log(hiddenNumber);

let guess = Number(prompt('Choose a number between 1 and 10:'));

if (hiddenNumber === guess) {
    alert(`Nice! You found the hidden number: ${hiddenNumber}`);
} else if (hiddenNumber > guess) {
    alert(`The hidden number is greater than ${guess}`);
} else {
    alert(`The hidden number is smaller than ${guess}`);
}