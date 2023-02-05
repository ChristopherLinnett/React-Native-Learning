import axios from 'axios';
import Expense from '../models/expense';

const endpoint =
  'https://learn-react-n-expensetracker-default-rtdb.asia-southeast1.firebasedatabase.app/';

export const storeExpense = (expenseData: Expense) => {
  const uploadData = {
    amount: expenseData.amount,
    date: expenseData.date.toISOString(),
    description: expenseData.description,
  };
  return axios.post(endpoint + 'expenses.json', uploadData);
};

export const updateExpense = (expense: Expense) => {
  const id = expense.id;
  const uploadData = {
    amount: expense.amount,
    date: expense.date.toISOString(),
    description: expense.description,
  };
  return axios.put(endpoint + 'expenses/' + `${id}.json`, uploadData);
};

export const deleteExpense = (id: string) => {
  return axios.delete(endpoint + 'expenses/' + `${id}.json`);
};

export const getExpenses = async () => {
  const response = await axios.get(endpoint + 'expenses.json');
  const expenseList: Expense[] = [];
  const data = response.data;
  for (const key in data) {
    expenseList.push(
      new Expense(
        key,
        data[key].description,
        data[key].amount,
        new Date(data[key].date),
      ),
    );
  }
  return expenseList;
};
