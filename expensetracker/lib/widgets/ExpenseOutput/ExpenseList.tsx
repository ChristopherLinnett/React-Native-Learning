import React from 'react';
import {FlatList} from 'react-native';
import Expense from '../../models/expense';
import ItemTile from '../ItemTile';

type ExpenseListProps = {expenses: Expense[]};

const ExpenseList = ({expenses}: ExpenseListProps) => {
  return (
    <FlatList
      data={expenses}
      renderItem={ItemTile}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpenseList;
