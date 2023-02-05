import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../constants/routeparams';
import {GlobalTheme} from '../constants/theme';
import Expense from '../models/expense';
import {ExpensesContext} from '../store/expenses.context';
import Button from '../widgets/Button';
import Input from './InputCompnent';
type ExpenseFormProps = {
  defaultData: Expense | null | undefined;
};
const ExpenseForm = ({defaultData}: ExpenseFormProps) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const expensesCtx = useContext(ExpensesContext);
  const [inputValues, setInputValues] = useState(
    defaultData === null || defaultData === undefined
      ? {
          amount: '',
          date: '',
          description: '',
        }
      : {
          amount: defaultData.amount.toFixed(2),
          date: defaultData.date.toDateString(),
          description: defaultData.description,
        },
  );
  const isEditing = defaultData !== null;
  const inputChangedHandler = (inputIdentifier: string, newAmount: string) => {
    setInputValues(previousValue => {
      return {...previousValue, [inputIdentifier]: newAmount};
    });
  };

  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    isEditing
      ? expensesCtx.updateExpense(
          defaultData!.id,
          new Expense(
            defaultData!.id,
            'updateTest',
            Math.random() * 100,
            new Date(),
          ),
        )
      : expensesCtx.addExpense(
          new Expense(null, 'test', Math.random() * 100, new Date()),
        );
    navigation.goBack();
  };
  return (
    <>
      <View style={styles.formStyle}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
          <Input
            style={styles.rowInput}
            label="amount"
            textInputConfig={{
              value: inputValues.amount,
              keyboardType: 'decimal-pad',
              onChangeText: inputChangedHandler.bind(this, 'amount'),
            }}
          />
          <Input
            style={styles.rowInput}
            label="date"
            textInputConfig={{
              placeholder: 'YYYY-MM-DD',
              maxLength: 10,
              onChangeText: inputChangedHandler.bind(this, 'date'),
              autoCorrect: false,
              value: inputValues.date,
            }}
          />
        </View>
        <Input
          label="description"
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, 'description'),
            value: inputValues.description,
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  formStyle: {
    marginTop: 40,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  title: {
    marginVertical: 24,
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalTheme.colors.primary100,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});

export default ExpenseForm;
