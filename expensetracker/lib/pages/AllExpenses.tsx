import React, {useContext} from 'react';
import {ExpensesContext} from '../store/expenses.context';
import ExpensesOutput from '../widgets/ExpenseOutput/ExpensesOutput';

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput timePeriod="All Expenses" expenses={expenseCtx.expenses} />
  );
};

export default AllExpenses;
