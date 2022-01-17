// Activity 1:

console.log("========== ACTIVITY 1 ==========");

// Make a person object

let person = {
    name: "Joel",
    age: 26,
    // NOTE: Using arrow syntax for this function
    // leads to this.name being undefined. see below for more info**
    sayHi: function() {
        return `Hello, my name is ${this.name}.`;
    }
}
console.log(person.sayHi());

/* **Unlike regular functions, arrow syntax functions do NOT have
    a 'this'. When you use an arrow function inside an object, it
    inherits the 'this' value from the enclosing lexical scope, which
    is the global scope in this case. So, 'this.name' in our sayHi()
    arrow function is equivalent to the 'window.sayHi'.
    The 'window.sayHi' is undefined by default because the 'window'
    object doesn't have a sayHi property. */


// Activity 2:
console.log('\n');
console.log("========== ACTIVITY 2 ==========");

// Create a pet object

let pet = {
    name: "Holly",
    typeOfPet: "cat",
    age: 4,
    colour: "brown",
    eat: function() {
        console.log(`${this.name} is eating.`);
    },
    drink: function() {
        console.log(`${this.name} is drinking.`);
    }
}

console.log(`I have a ${pet.typeOfPet} called ${pet.name}.`);
pet.eat();

// Activity 3:
console.log('\n');
console.log("========== ACTIVITY 3 ==========");

let coffeeShop = {
    branch: "JavaSip\'d",
    drinks: 
        [["Espresso", 1.50],
        ["Latte", 2.70],
        ["Flat White", 2.20]],
    food:
        [["Croissant", 1.50],
        ["Bagel", 2.00],
        ["Sausage Muffin", 3.00]],

    total: 0, 
    drinksOrdered: function (...items) {
        let drinkTotal=0; 
        let validDrinks=[];
        if (items.length<1) {
            return `Please select a drink.`
        }
        for (let i=0; i<items.length; i++) {
            for (let j=0; j<this.drinks.length; j++) {
                if (items[i] == this.drinks[j][0]) {
                    this.total += this.drinks[j][1];
                    drinkTotal += this.drinks[j][1];
                    validDrinks.push(this.drinks[j][0]);
                }
            }
        }
        if (validDrinks.length<1) {
            return `Please pick a drink from the menu.`
        }
        return `Here is your drink order: ${validDrinks.join(', ')}. \nDrinks cost: £${drinkTotal.toFixed(2)}.`;  
    },
    foodOrdered: function (...items) {
        let foodTotal=0;
        let validItems=[];
        if (items.length<1) {
            return `Please select a drink.`
        }
        for (let i=0; i<items.length; i++) {
            for (let j=0; j<this.food.length; j++) {
                if (items[i] == this.food[j][0]) {
                    this.total += this.food[j][1];
                    foodTotal += this.food[j][1];
                    validItems.push(this.food[j][0]);
                }
            }
        }
        if (validItems.length<1) {
            return `Please pick food from the menu.`
        }
        return `Here is your food order: ${validItems.join(', ')}. \nFood cost: £${foodTotal.toFixed(2)}.`
    },
    getBill: function() {
        return `Total bill : £${this.total.toFixed(2)}`;
    } 
}

console.log(coffeeShop.drinksOrdered("Espresso", "Latte"));
//console.log(coffeeShop.drinksOrdered(''))
console.log(coffeeShop.foodOrdered("Bagel", "Croissant", "Sausage Muffin"));

console.log(coffeeShop.getBill())