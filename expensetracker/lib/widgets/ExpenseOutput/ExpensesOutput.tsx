import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GlobalTheme} from '../../constants/theme';
import Expense from '../../models/expense';
import SummaryBar from '../SummaryBar';
import ExpenseList from './ExpenseList';

type ExpenseOutputProps = {
  timePeriod: string;
  expenses: Expense[];
};
const ExpensesOutput = ({expenses, timePeriod}: ExpenseOutputProps) => {
  return (
    <View style={styles.container}>
      <SummaryBar timePeriod={timePeriod} expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: '5%',
    backgroundColor: GlobalTheme.colors.primary800,
  },
});

export default ExpensesOutput;
