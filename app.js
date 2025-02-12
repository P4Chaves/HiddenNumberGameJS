alert('Starting the hidden number game.');
let hiddenNumber = 4;
let guess = prompt('Choose a number between 1 and 10:');

if (hiddenNumber == guess) {
    console.log('Nice! You found the hidden number (4)');
}