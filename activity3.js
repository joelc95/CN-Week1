// Get today in milliseconds
let today = Date.now();
// Get birthday in milliseconds
const myBday = new Date('August 15, 2022');
// Work out difference in milliseconds, convert to days, round down
let daysToBday = Math.floor((myBday.getTime() - today) / 1000 / 60 / 60 / 24);
// plug variables into template string
console.log(`It is ${daysToBday} days until my next birthday!`);

// Make new date object for birth
const wasBorn = new Date('August 15, 1995');
// Get difference in milliseconds, convert to days
let daysSinceBirth = Math.floor((today - wasBorn.getTime()) / 1000 / 3600 / 24);

console.log(`I was born ${daysSinceBirth} days ago!`);