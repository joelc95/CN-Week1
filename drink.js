let drinks =    [['coke', '£1.50', 1, 3],
                ['lemo', '£1.50', 1.5, 0],
                 ['tonic', '£2.00', 2.0, 1]];

let balance = 1.5;

let drinkCheck = () => {
    //This will list the drinks on offer and their price
    console.log("Here are the choice of drinks:")
    for (let i=0; i<drinks.length; i++) {
        console.log(`${drinks[i][0]}, ${drinks[i][1]}`)
    }
}

let chooseDrink = (choice) => {
    
    for (let i=0; i<drinks.length; i++) {
        //console.log(drinks[i][0])
        if (choice == drinks[i][0]) {
            
            if (drinks[i][3] == 0) {
                return console.log('out of stock');
            }
            if (drinks[i][2] > balance) {
                console.log('insufficient funds!');
            } else {
                balance = balance - drinks[i][2];
                drinks[i][3]--;
                console.log(`Here is your drink: ${drinks[i][0]}.`);
                console.log(`Remaining balance: £${balance}`);
            }
        }
    }
}

drinkCheck();
chooseDrink('coke');
chooseDrink('coke');
chooseDrink('coke');
chooseDrink('coke');
console.log(drinks)