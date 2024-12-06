class bankAccount {
  constructor(accountHolder, balance = 0) {
    this.accountHolder = accountHolder;
    this._balance = balance;
  }

  deposit(amount) {
    this._balance += amount;
    return amount;
  }
  withdraw(amount) {
    if (amount <= this._balance) {
      this._balance = this._balance - amount;
      console.log(
        `you have withdraw: ${amount}$ and your balance is: ${this._balance}$`
      );
    } else {
      return console.log(
        `you do not enough funds to withdraw, your balance is: ${this._balance}$`
      );
    }
    return amount;
  }

  getBalance(balance) {
    return balance;
  }
}

class savingAccount extends bankAccount {
  constructor(accountHolder, balance = 0, savingsBalance = 0) {
    super(accountHolder, balance);
    this.savingsBalance = savingsBalance;
  }

  transferToSavings(transferedAmount) {
    if (transferedAmount <= this._balance) {
      this._balance -= transferedAmount;
      this._savingsBalance += transferedAmount;
      console.log(
        `you have withdrawed from your balance: ${transferedAmount} and added to your savings: ${transferedAmount} and your Savings Balance is: ${this.savingsBalance}`
      );
    } else {
      console.log(
        `You do not have enough funds to add to your Savings Account.`
      );
    }
  }

  updatedBalance(updatedBalance) {
    this._updatedBalance = updatedBalance;
    if (this._balance - this.transferedAmount) {
      this.updatedBalance = this.transferedAmount;
      return console.log(
        `This is the saving account balance: ${this._updatedBalance}`
      );
    }
  }
  applyInterestRate(amount) {
    amount = 2 / 100;
    this.amount = amount;
    return this._balance * this.amount;
  }
}
const myAccount = new bankAccount("John Deer", 100);
myAccount.deposit(50);
myAccount.withdraw(75);
myAccount.getBalance();

const mySavings = new savingAccount(0);
mySavings.updatedBalance();
mySavings.transferToSavings(50);

// console.log(
//   `You have deposited: ${deposit} and total balance is: ${myAccount.depositedAmount()}`
// );
// console.log(
//   `you have withdrawed: ${myAccount.withdraw(
//     75
//   )} and total balance in the account: ${myAccount.withdrawAmount()}`
