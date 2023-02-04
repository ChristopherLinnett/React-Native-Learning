import {NavigationProp, RouteProp} from '@react-navigation/native';
import React, {useContext, useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {RootStackParamList} from '../constants/routeparams';
import {GlobalTheme} from '../constants/theme';
import {ExpensesContext} from '../store/expenses.context';
import Button from '../widgets/Button';
import IconButton from '../widgets/IconButton';

type EditExpenseProps = {
  route: RouteProp<RootStackParamList, 'EditExpense'>;
  navigation: NavigationProp<RootStackParamList>;
};
const EditExpense = ({route, navigation}: EditExpenseProps) => {
  const editingExpenseId = route.params?.expenseID;
  const isEditing = !!editingExpenseId;
  const expensesCtx = useContext(ExpensesContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editingExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
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
