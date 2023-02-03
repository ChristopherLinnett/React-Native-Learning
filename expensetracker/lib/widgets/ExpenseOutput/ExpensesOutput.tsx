import React from 'react';
import {View} from 'react-native';
import SummaryBar from '../SummaryBar';
import ExpenseList from './ExpenseList';

type ExpenseOutputProps = {
  timePeriod: string;
  expenses: {amount: number}[];
};
const ExpensesOutput = ({expenses, timePeriod}: ExpenseOutputProps) => {
  return (
    <View>
      <SummaryBar timePeriod={timePeriod} expenses={expenses} />
      <ExpenseList />
    </View>
  );
};

export default ExpensesOutput;
