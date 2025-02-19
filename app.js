alert('Starting the hidden number game.');
let hiddenNumber = 4;
console.log (hiddenNumber)
let guess = prompt('Choose a number between 1 and 10:');

if (hiddenNumber == guess) {
    alert(`Nice! You found the hidden number: ${hiddenNumber}`);
}
else (alert('Wrong number, try again.'))