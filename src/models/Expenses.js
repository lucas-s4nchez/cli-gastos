import colors from "colors";
import Expense from "./Expense.js";

class Expenses {
  constructor(expenseList = []) {
    this.expenses = expenseList;
  }

  get expenseList() {
    return this.expenses;
  }

  getExpenseList() {
    console.log("\n");
    if (this.expenses.length === 0) {
      console.log("\nTodavía no tenés ningún gasto\n".green);
    }
    this.expenses.forEach((expense, index) => {
      console.log(
        `${`${index + 1}.`.green} ${expense.desc} :: ${
          `${expense.amount}`.green
        }`
      );
    });
  }

  addNewExpense(desc, amount) {
    const expense = new Expense(desc, amount);
    this.expenses.push(expense);
  }

  deleteExpense(id = "") {
    if (id) {
      this.expenses = this.expenses.filter((expense) => expense.id !== id);
    }
  }
}

export default Expenses;
