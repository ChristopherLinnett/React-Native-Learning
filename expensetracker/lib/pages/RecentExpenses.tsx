import React, {useContext, useEffect, useState} from 'react';
import {ExpensesContext} from '../store/expenses.context';
import getDateMinusDays from '../util/date';
import {getExpenses} from '../util/http';
import ExpensesOutput from '../widgets/ExpenseOutput/ExpensesOutput';
import LoadingOverlay from '../widgets/LoadingOvelay';

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  const [firstRun, setFirstRun] = useState(true);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (expensesContext.expenses.length === 0 && firstRun === true) {
      setFirstRun(false);
      setLoading(true);
      getExpenses().then(expenseArray => {
        expenseArray.forEach(expense => {
          expensesContext.addExpense(expense);
        });
        setLoading(false);
      });
    }
  }, [expensesContext, firstRun]);

  const recentExpenses = expensesContext.expenses.filter(expense => {
    const today = new Date();
    const date7daysago = getDateMinusDays(today, 7);
    return expense.date > date7daysago;
  });
  if (isLoading) {
    return <LoadingOverlay />;
  } else {
    return (
      <ExpensesOutput timePeriod="Last 7 Days" expenses={recentExpenses} />
    );
  }
};

export default RecentExpenses;
