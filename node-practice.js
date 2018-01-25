// node --use-strict

// // // // // // //

let greeting = 'Hello world!';

let splitGreeting = greeting.split('');

let joinGreeting = splitGreeting.join('');

// // // // // // //

// let max = array.length;

function getRandomInt(max) {

    return Math.floor(Math.random() * max);
}

// // // // // // //

let random1 = getRandomInt(splitGreeting.length);
let random2 = getRandomInt(splitGreeting.length);

let firstLetter = splitGreeting[random1];
let secondLetter = splitGreeting[random2];

splitGreeting[random1] = secondLetter;
splitGreeting[random2] = firstLetter;

// // // // // // //

let candy = new Map();

candy.set('purple', 'grape')
     .set('red', 'cherry')
     .set('blue','blueberry')
     .set('green', 'lime')
     .set('yellow', 'lemon');

for (let [color, flavor] of candy) {
    console.log(`The ${flavor} flavor is colored ${color}.`);
    }

candy.get('purple'); //returns 'grape'
candy.get('orange'); //returns undefined

// // // // // // //













