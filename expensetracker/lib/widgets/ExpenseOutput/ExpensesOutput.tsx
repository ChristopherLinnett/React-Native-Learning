import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
      {expenses.length > 0 ? (
        <ExpenseList expenses={expenses} />
      ) : (
        <View style={styles.emptyExpenseContainer}>
          <Text style={styles.emptyExpenseText}>No Expenses Found</Text>
        </View>
      )}
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
  emptyExpenseContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyExpenseText: {
    textAlign: 'center',
    fontSize: 24,
    color: GlobalTheme.colors.primary200,
  },
});

export default ExpensesOutput;
