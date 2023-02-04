/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, ReactNode, useReducer} from 'react';
import Expense from '../models/expense';
import DUMMY_EXPENSES from '../constants/DummyData';
type ExpenseContextProps = {
  expenses: Expense[];
  addExpense: Function;
  updateExpense: Function;
  deleteExpense: Function;
};

export const ExpensesContext = createContext<ExpenseContextProps>({
  expenses: [],
  addExpense: (expense: Expense) => {},
  updateExpense: (id: string, newExpense: Expense) => {},
  deleteExpense: (id: string | undefined) => {},
});

const expensesReducer = (
  state: Expense[],
  action: {
    type: 'ADD' | 'UPDATE' | 'DELETE';
    payload: {id?: string | undefined; expense?: Expense | undefined};
  },
) => {
  switch (action.type) {
    case 'ADD':
      if (action.payload?.expense === undefined) {
        return state;
      }
      const expense = action.payload.expense;
      return [
        new Expense(
          Math.random().toString(),
          expense.description,
          expense.amount,
          expense.date,
        ),
        ...state,
      ];

    case 'UPDATE':
      if (
        action.payload?.id === undefined ||
        action.payload?.expense === undefined
      ) {
        return state;
      }
      const newExpense = action.payload.expense;
      const expenseItemsIndex = state.findIndex(
        expenseItem => expenseItem.id === action.payload.id,
      );
      if (expenseItemsIndex < 0) {
        return state;
      }
      const newState = [...state];
      newState[expenseItemsIndex] = new Expense(
        newExpense.id,
        newExpense.description,
        newExpense.amount,
        newExpense.date,
      );
      return newState;
    case 'DELETE':
      if (action.payload.id === undefined) {
        return state;
      }
      return state.filter(eachItem => eachItem.id !== action.payload.id);
    default:
      return state;
  }
};
const ExpensesContextProvider = ({children}: {children: ReactNode}) => {
  const [expensesState, dispatch] = useReducer(
    expensesReducer,
    DUMMY_EXPENSES,
    undefined,
  );

  const addExpense = (expense: Expense) =>
    dispatch({type: 'ADD', payload: {expense: expense}});

  const deleteExpense = (id: string) =>
    dispatch({type: 'DELETE', payload: {id: id}});

  const updateExpense = (id: string, expense: Expense) =>
    dispatch({type: 'UPDATE', payload: {id: id, expense: expense}});

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
