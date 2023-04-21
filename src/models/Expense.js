import { v4 as uuidv4 } from "uuid";

class Expense {
  constructor(desc, amount) {
    this.id = uuidv4();
    this.desc = desc;
    this.amount = amount;
  }
}

export default Expense;
