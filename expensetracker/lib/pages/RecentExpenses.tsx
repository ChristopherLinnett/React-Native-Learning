import React, {useContext, useEffect} from 'react';
import {ExpensesContext} from '../store/expenses.context';
import getDateMinusDays from '../util/date';
import {getExpenses} from '../util/http';
import ExpensesOutput from '../widgets/ExpenseOutput/ExpensesOutput';

const RecentExpenses = () => {
  useEffect(() => {
    if (expensesContext.expenses.length === 0) {
      getExpenses().then(expenseArray => {
        expenseArray.forEach(expense => {
          expensesContext.addExpense(expense);
        });
      });
    }
  });

  const expensesContext = useContext(ExpensesContext);
  const recentExpenses = expensesContext.expenses.filter(expense => {
    const today = new Date();
    const date7daysago = getDateMinusDays(today, 7);
    return expense.date > date7daysago;
  });

  return <ExpensesOutput timePeriod="Last 7 Days" expenses={recentExpenses} />;
};

export default RecentExpenses;
