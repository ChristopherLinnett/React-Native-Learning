import React from 'react';
import {View} from 'react-native';
import Expense from '../../models/expense';
import SummaryBar from '../SummaryBar';
import ExpenseList from './ExpenseList';

type ExpenseOutputProps = {
  timePeriod: string;
  expenses: Expense[];
};
const ExpensesOutput = ({expenses, timePeriod}: ExpenseOutputProps) => {
  return (
    <View>
      <SummaryBar timePeriod={timePeriod} expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;
