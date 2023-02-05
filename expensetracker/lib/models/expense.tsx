class Expense {
  id: string | null;
  description: string;
  amount: number;
  date: Date;
  constructor(
    id: string | null,
    description: string,
    amount: number,
    date: Date,
  ) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.date = date;
  }
  isEqualTo(expense: Expense) {
    const equalValues =
      this.id !== expense.id ||
      this.description !== expense.description ||
      this.amount !== expense.amount ||
      this.date.toISOString() !== expense.date.toISOString();
    console.log(equalValues);
    console.log(!equalValues);
    return !equalValues;
  }
}
export default Expense;
