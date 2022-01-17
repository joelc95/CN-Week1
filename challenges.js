
// Challenge 1: Password length check
console.log('-----CHALLENGE 1-----');
let password = 'fnoihofidgij';

if (password.length < 8) {
    console.log("Your password is too short")
} else {
    console.log(`Here is your password: ${password}`);
}

// Challenge 2: 3 or 5
console.log('-----CHALLENGE 2-----');
let digit = 2;

if (digit % 3 == 0 || digit % 5 == 0) {
    console.log(`${digit} is divisible by 3 or 5!`);
} else {
    console.log(`${digit} is NOT divisible by 3 or 5!!`);
}

// Challenge 3: FizzBuzz ternary
console.log('-----CHALLENGE 3-----');
let num = 5;

(num % 5 == 0 && num % 3 ==0 ) ? console.log('FizzBuzz') : (num % 3 == 0) ? console.log("Fizz") : (num % 5 == 0) ? console.log("Buzz") : console.log(num)

// Challenge 4: Palindrome check
console.log('-----CHALLENGE 4-----');

let num2 = 1001;

function palindromeChecker(x) {
    let reversedX = Number(x.toString().split('').reverse().join(''));

    if (reversedX == x) {
        return console.log("Palindrome!");
    } else {
        return console.log("Not a palindrome!");
    }
}

palindromeChecker(num2);

// Challenge 5: Time and place
console.log('-----CHALLENGE 5-----');

let time = 8;
let placeOfWork = 'the office';
let townOfHome = 'Liverpool';

if (time == 8) {
    console.log(`I\'m commuting to ${placeOfWork}!`);
} else if (time < 9) {
    console.log(`I\'m at ${placeOfWork}!`);
} else {
    console.log(`I\'m at home in ${townOfHome}!`);
}


//Challenge 6: the last vowel
console.log('-----CHALLENGE 6-----');

let messyString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let lastVowel = '';
let lastVowelIndex;
for (let i = 0; i < messyString.length ; i++) {
    if (messyString[i] == 'a' || messyString[i] == 'e' || messyString[i] == 'i' || messyString[i] == 'o' || messyString == 'u') {

        lastVowel = messyString[i];
        lastVowelIndex = i+1;
    }
}

if (lastVowel == '') {
    console.log('There are no vowels!');
} else {
    console.log(`The last vowel is \'${lastVowel}\', and it is at position ${lastVowelIndex}.`);
}

// Challenge 7: first and last
console.log('-----CHALLENGE 7-----');

let word = 'weofgoij'

if (word[0] == word[word.length-1]) {
    console.log("same letter")
} else {
    console.log("not the same")
}

// Challenge 8: Even Sum
console.log('-----CHALLENGE 8-----')
let numA = 2;
let numB = 3;

if ((numA + numB) % 2 == 0) {
    console.log('The sum is even!');
} else {
    console.log('The sum is odd!');
}
