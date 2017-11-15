var state = {
  balance: 100
};

var inquirer = require("inquirer");

function askUser() {
  var questions = [
    {
      type: "list",
      name: "option",
      message: "Would you like to see your balance or make  a withdrawal?",
      choices: ["withdraw", "deposit", "balance"]
    }
  ];

  inquirer.prompt(questions).then(answers => {
    if (answers.option === "withdraw") {
      withdraw();
    }
    if (answers.option === "deposit") {
      deposit();
    }
    if (answers.option === "balance") {
      balance();
    }
  });
}
askUser();

function withdraw() {
  var questions = [
    {
      type: "input",
      name: "amount",
      message: "how much do you want to withdraw",
      default: 100,
      filter: parseInt
    }
  ];
  inquirer.prompt(questions).then(answers => {
    state.balance = state.balance - answers.amount;
    balance();
  });
}

function deposit() {
  var questions = [
    {
      type: "input",
      name: "amount",
      message: "how much?",
      filter: parseInt
    }
  ];
  inquirer.prompt(questions).then(answers => {
    state.balance = state.balance + answers.amount;
    balance();
  });
}

function balance() {
  console.log(state.balance);
  askUser();
}
