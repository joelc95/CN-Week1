// Set values here
let accountNumber = 505;
let balance = 1000;
let withdrawAmount = 1100;

const cashWithdraw = (withdrawAmount, accountNumber) => {
    
    // First checks if you have enough balance to withdraw
    if (withdrawAmount > balance) {
        console.log(`Not enough funds! Here is your balance: ${balance}`);
        return;
    }
    // If you have enough balance, do the following
    balance -= withdrawAmount;
    console.log(`Withdrawing ${withdrawAmount} from account ${accountNumber}...`);
    console.log(`Your new balance is ${balance}.`)
}

cashWithdraw(withdrawAmount, accountNumber);