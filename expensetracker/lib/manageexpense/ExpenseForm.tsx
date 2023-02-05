import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../constants/routeparams';
import {GlobalTheme} from '../constants/theme';
import Expense from '../models/expense';
import Button from '../widgets/Button';
import Input from '../widgets/InputCompnent';
type ExpenseFormProps = {
  defaultData: Expense | null | undefined;
  onSubmit: Function;
};
const ExpenseForm = ({defaultData, onSubmit}: ExpenseFormProps) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const [input, setInput] = useState(
    defaultData === null || defaultData === undefined
      ? {
          amount: {value: '', isValid: true},
          date: {value: new Date().toISOString().slice(0, 10), isValid: true},
          description: {value: '', isValid: true},
        }
      : {
          amount: {value: defaultData.amount.toFixed(2), isValid: true},
          date: {
            value: defaultData.date.toISOString().slice(0, 10),
            isValid: true,
          },
          description: {value: defaultData.description, isValid: true},
        },
  );
  const isEditing = defaultData !== null;
  const inputChangedHandler = (inputIdentifier: string, newAmount: string) => {
    setInput(previousValue => {
      return {
        ...previousValue,
        [inputIdentifier]: {value: newAmount, isValid: true},
      };
    });
  };

  const cancelHandler = () => {
    console.log(defaultData?.id);
    navigation.goBack();
  };

  const submitHandler = () => {
    const submitData = new Expense(
      defaultData?.id ?? Math.random().toString(),
      input.description.value,
      +input.amount.value,
      new Date(input.date.value),
    );

    const amountIsValid = !isNaN(submitData.amount) && submitData.amount > 0;
    const dateIsValid = submitData.date.toString() !== 'Invalid Date';
    const descriptionValid = submitData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionValid) {
      setInput(currentInputs => {
        return {
          amount: {value: currentInputs.amount.value, isValid: amountIsValid},
          date: {value: currentInputs.date.value, isValid: dateIsValid},
          description: {
            value: currentInputs.description.value,
            isValid: descriptionValid,
          },
        };
      });
      return;
    }
    onSubmit(submitData);
  };

  const formIsInvalid =
    !input.amount.isValid || !input.date.isValid || !input.description.isValid;

  return (
    <>
      <View style={styles.formStyle}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
          <Input
            style={styles.rowInput}
            invalid={!input.amount.isValid}
            label="amount"
            textInputConfig={{
              value: input.amount.value,
              keyboardType: 'decimal-pad',
              onChangeText: inputChangedHandler.bind(this, 'amount'),
            }}
          />
          <Input
            style={styles.rowInput}
            invalid={!input.date.isValid}
            label="date"
            textInputConfig={{
              placeholder: 'YYYY-MM-DD',
              maxLength: 10,
              onChangeText: inputChangedHandler.bind(this, 'date'),
              autoCorrect: false,
              value: input.date.value,
            }}
          />
        </View>
        <Input
          invalid={!input.description.isValid}
          label="description"
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, 'description'),
            value: input.description.value,
          }}
        />
      </View>
      <View style={[styles.errorContainer, formIsInvalid && styles.visible]}>
        <Text style={styles.errorText}>
          Please Correct Your{' '}
          {!input.amount.isValid
            ? 'Amount'
            : !input.date.isValid
            ? 'Date'
            : 'Description'}{' '}
          Field
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
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
  visible: {
    opacity: 1,
  },
  errorContainer: {
    alignSelf: 'center',
    backgroundColor: GlobalTheme.colors.primary700,
    margin: 10,
    opacity: 0.0,
    borderRadius: 10,
  },
  errorText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
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
