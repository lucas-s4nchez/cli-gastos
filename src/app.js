import colors from "colors";
import Expenses from "./models/Expenses.js";
import {
  inquirerConfirm,
  inquirerDeleteExpense,
  inquirerInputAddExpense,
  inquirerMenu,
  inquirerPause,
} from "./helpers/inquirer.js";
import { loadDB, saveDB } from "./helpers/db.js";

const main = async () => {
  let opt = "";
  const expensesDB = loadDB();
  const expenses = new Expenses(expensesDB);
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        expenses.getExpenseList();
        break;
      case "2":
        const { desc, amount } = await inquirerInputAddExpense();
        expenses.addNewExpense(desc, amount);
        break;
      case "3":
        const expenseId = await inquirerDeleteExpense(expenses.expenseList);
        if (expenseId !== "0") {
          const confirm = await inquirerConfirm("¿Estás seguro?");
          if (confirm) {
            expenses.deleteExpense(expenseId);
            console.log("\nGasto eliminado\n".green);
          }
        }
        break;

      default:
        break;
    }

    saveDB(JSON.stringify(expenses.expenseList));

    if (opt !== "4") await inquirerPause();
  } while (opt !== "4");
};

main();
