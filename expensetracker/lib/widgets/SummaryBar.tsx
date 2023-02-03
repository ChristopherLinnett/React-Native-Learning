import React from 'react';
import {View, Text} from 'react-native';

type SummaryBarProps = {
  timePeriod: string;
  expenses: {amount: number}[];
};

const SummaryBar = ({timePeriod, expenses}: SummaryBarProps) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{timePeriod}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default SummaryBar;
