import colors from "colors";
import inquirer from "inquirer";
import { menuQuestions, pauseQuestions } from "./questions.js";

export const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Seleccione una opción   ".white);
  console.log("===========================\n".green);

  const { opcion } = await inquirer.prompt(menuQuestions);
  return opcion;
};

export const inquirerPause = async () => {
  console.log("\n");
  await inquirer.prompt(pauseQuestions);
};

export const inquirerInputAddExpense = async () => {
  const inputQuestion = [
    {
      type: "input",
      name: "desc",
      message: "Descripción:",
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese una descripción";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "amount",
      message: "Monto:",
      validate(value) {
        if (!value) {
          return "Por favor ingresa un monto";
        }
        const valid = !isNaN(parseInt(value));
        if (!valid) {
          return "Por favor ingresa un monto válido (sólo números)";
        }
        return true;
      },
    },
  ];

  const { desc, amount } = await inquirer.prompt(inputQuestion);
  return { desc, amount };
};

export const inquirerDeleteExpense = async (expenses = []) => {
  const choices = expenses.map((expense, index) => {
    return {
      value: expense.id,
      name: `${`${index + 1}.`.green} ${expense.desc} :: ${
        `${expense.amount}`.green
      }`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0.".green + "Cancelar",
  });

  const deleteQuestions = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(deleteQuestions);

  return id;
};

export const inquirerConfirm = async (message) => {
  const confirmQuestion = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(confirmQuestion);

  return ok;
};
