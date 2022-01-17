// Sets to true at runtime
// Must call function multiple times per runtime to change output
let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Now stopping grinding...");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding now starting...");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans(); // prints stopping, sets false
pressGrindBeans(); // prints starting, sets true