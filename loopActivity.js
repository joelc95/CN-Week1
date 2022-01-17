// Activity 1:

console.log('========== ACTIVITY 1 ==========');

let favFilms = ['There Will Be Blood', 'Lost In Translation', 'The Big Short'];

favFilms.unshift('Knives Out', 'Goodfellas');

console.log("Some of my favourite films: ")
for (let i=0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
}
console.log('\n');
// Activity 2:

console.log('========== ACTIVITY 2 ==========');
for (let i=0; i<6; i++) {
    console.log(Math.floor(Math.random()*49 + 1));
}
console.log('\n');

// Activity 3:
console.log('========== ACTIVITY 3 ==========');
for (let i=9; i > -1; i--) {
    console.log(i);
}
console.log('\n');

// Activity 4

console.log('========== ACTIVITY 4 ==========');

function filmCheck(array) {
    if (array[2] === 'Ghostbusters') {
        console.log("yey it\' ghostbusters");
    } else {
        console.log("boooo, we want ghostbusters");
    }
}

filmCheck(favFilms);

console.log('\n');

// Activity 5

console.log('========== ACTIVITY 5 ==========');

let random;

for (let i=0; i<6; i++) {
    random = Math.floor(Math.random()*30 + 1);
    if (random % 7 === 0) {
        console.log(`YES! ${random} is divisible by 7!`);
    } else {
        console.log(`NO! ${random} is NOT divisible by 7!`);
    }
}

console.log('\n');

// Activity 6
// do-while loops always get run at least once!!

console.log('========== ACTIVITY 6 ==========');

let x = 0;
let y = 0;
console.log('WHILE LOOP: ');
while (y < x) {
    
    console.log('y is less than x');
    y++;
}

let i=0;
let j=0;

console.log('DO-WHILE LOOP: ');
do {
    console.log('y is less than x');
    y++;
} while (j < i);

console.log('\n');

// Activity 7

console.log('========== ACTIVITY 7 ==========');

let num = 20;

function primeCheck(n) {
    for (i=2; i<n; i++) {
        if (n%i == 0) {
            return false;
        }
    }
    return true;
}

for (let i=1; i<=num; i++) {
    if (!primeCheck(i)) {
        console.log(`NO! ${i} is NOT a prime number!`)
    } else {
        console.log(`YES! ${i} is a prime number!`)
    }
}

console.log('\n');
