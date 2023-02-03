import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalTheme} from '../constants/theme';

type SummaryBarProps = {
  timePeriod: string;
  expenses: {amount: number}[];
};

const SummaryBar = ({timePeriod, expenses}: SummaryBarProps) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{timePeriod}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalTheme.colors.primary50,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: GlobalTheme.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalTheme.colors.primary500,
  },
});

export default SummaryBar;
