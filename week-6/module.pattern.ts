// Design patterns are reusable solutions to common problems that occur during software development.
// They provide a template or blueprint for solving particular issues in a way
// that promotes best practices,
// enhances code maintainability, and improves overall software quality.

// here we are creating a module named "Bank"
// "Bank" encapsulates the functionality related to
// creating accounts, getting account balances, depositing funds, and withdrawing funds.
// The accounts array is private to the module,
// and the only way to interact with it is through the exposed public methods.
// This helps maintain data privacy and prevents external code from directly manipulating the accounts array.

type Account = {
  number: number;
  owner: string;
  balance: number;
};

// writing IIFE to avoid a seperate call;
const Bank = () => {
  // private variable to store the accounts details;
  let accounts: Account[] = [];

  // private method for finding bank account with specified account number;
  function findAccount(accountNumber: number) {
    return accounts.find(
      (account: Account) => account.number === accountNumber
    );
  }

  return {
    // public method to create a new bank account
    // the account number will be returned after creating the account;
    createAccount: function (ownerName: string, initialBalance?: number) {
      const account = {
        number: accounts.length + 1,
        owner: ownerName,
        balance: initialBalance || 0,
      };
      accounts.push(account);
      return account.number;
    },

    // public method to get account balance
    getBalance: function (accountNumber: number) {
      // accessing private method to find account;
      const account = findAccount(accountNumber);
      if (account) {
        return account.balance;
      } else {
        return "no account found with specified account number";
      }
    },

    // public method to deposit funds into an account
    deposit: function (accountNumber: number, amount: number) {
      // accessing private method to find account;
      const account = findAccount(accountNumber);
      if (account) {
        account.balance += amount;
        return `successfully deposited the amount ${amount}`
      } else {
        return "no account found with specified account number";
      }
    },

    // public method to withdraw funds from an account;
    withdraw: function (accountNumber: number, amount: number) {
      // accessing private method to find account;
      const account = findAccount(accountNumber);
      if (account) {
        if (amount <= account.balance) {
          account.balance -= amount;
          return `withdrawal of rupees ${amount} is successfull `
        } else {
          return "insufficient funds";
        }
      } else {
        return "no account found with specified account number";
      }
    },
  };
};

const obj = Bank();

const safeerAccountNumber = obj.createAccount("safeer");
const jabiAccountNumber = obj.createAccount("jabi", 90);

console.log(`safeer's account balance:`, obj.getBalance(safeerAccountNumber)); // 0
console.log(`jabi's account balance:`, obj.getBalance(jabiAccountNumber)); // 90

console.log(obj.deposit(safeerAccountNumber, 700));
console.log(`safeer's account balance:`, obj.getBalance(safeerAccountNumber)); // 500
console.log(obj.withdraw(safeerAccountNumber, 300));

console.log(`safeer's account balance:`, obj.getBalance(safeerAccountNumber)); // 300
console.log(obj.withdraw(safeerAccountNumber, 4000));
console.log(`safeer's account balance:`, obj.getBalance(safeerAccountNumber));
