function buildSandwich(one, two, three, four, five) {
    let sandwich = [one, two, three];
    sandwich.unshift(four, five);


    return console.log(sandwich);
}

buildSandwich('pastrami', 'salami', 'ham', 'cheese', 'onion');

const buildSandwichShort = (top1, top2, top3, top4, top5) => {
    console.log(`Preparing your sandwich order: ${top1}, ${top2}, ${top3}, ${top4}, ${top5}.`)
}

buildSandwichShort('pastrami', 'salami', 'ham', 'cheese', 'onion');

