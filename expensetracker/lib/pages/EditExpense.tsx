import {NavigationProp, RouteProp} from '@react-navigation/native';
import React, {useContext, useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {RootStackParamList} from '../constants/routeparams';
import {GlobalTheme} from '../constants/theme';
import ExpenseForm from '../manageexpense/ExpenseForm';
import Expense from '../models/expense';
import {ExpensesContext} from '../store/expenses.context';
import {storeExpense} from '../util/http';
import IconButton from '../widgets/IconButton';

type EditExpenseProps = {
  route: RouteProp<RootStackParamList, 'EditExpense'>;
  navigation: NavigationProp<RootStackParamList>;
};
const EditExpense = ({route, navigation}: EditExpenseProps) => {
  const editingExpenseId = route.params?.expenseID;
  const isEditing = !!editingExpenseId;
  const expensesCtx = useContext(ExpensesContext);
  const currentExpense = expensesCtx.expenses.find(
    expense => expense.id === editingExpenseId,
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);
  if (isEditing && currentExpense === undefined) {
    return;
  }

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editingExpenseId);
    navigation.goBack();
  };
  const confirmHandler = async (expense: Expense) => {
    if (isEditing) {
      expensesCtx.updateExpense(editingExpenseId, expense);
    } else {
      const result = await storeExpense(expense);
      expense.id = result.data.name;
      expensesCtx.addExpense(expense);
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultData={isEditing ? currentExpense : null}
        onSubmit={confirmHandler}
      />
      {isEditing && (
        <View style={styles.deleteButtonContainer}>
          <IconButton
            name="trash"
            color={GlobalTheme.colors.error50}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  deleteButtonContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalTheme.colors.primary200,
    alignItems: 'center',
  },
});

export default EditExpense;
