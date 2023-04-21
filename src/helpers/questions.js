import inquirer from "inquirer";
import colors from "colors";
export const menuQuestions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      { value: "1", name: `${"1.".green} Listar gastos` },
      { value: "2", name: `${"2.".green} Añadir nuevo gasto` },
      { value: "3", name: `${"3.".green} Eliminar Gasto` },
      { value: "4", name: `${"4.".green} Salir` },
    ],
  },
];

export const pauseQuestions = [
  {
    type: "input",
    name: "pause",
    message: `Presiona ${"ENTER".green} para continuar`,
  },
];
