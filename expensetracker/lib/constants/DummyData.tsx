import Expense from '../models/expense';

const DUMMY_EXPENSES = [
  new Expense('e1', 'A pair of Shoes', 59.99, new Date('2023-1-23')),
  new Expense('e2', 'A pair of shorts', 19.99, new Date('2023-2-2')),
  new Expense('e3', 'A shirt', 23.5, new Date('2023-1-1')),
  new Expense(
    'e4',
    'Replacement Catalytic Converter',
    800,
    new Date('2023-2-2'),
  ),
];

export default DUMMY_EXPENSES;
