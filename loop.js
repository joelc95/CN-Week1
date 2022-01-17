let multiplesTwo = [];

for (let i=0; i<20; i++) {
    if (i%2 == 0) {
        multiplesTwo.push(i);
    }
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);