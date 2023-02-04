import React from 'react';
import {FlatList} from 'react-native';
import Expense from '../../models/expense';
import {ItemTileBuilder} from '../ItemTile';

type ExpenseListProps = {expenses: Expense[]};

const ExpenseList = ({expenses}: ExpenseListProps) => {
  return (
    <FlatList
      data={expenses}
      renderItem={ItemTileBuilder}
      keyExtractor={item => item.id ?? Math.random().toString()}
    />
  );
};

export default ExpenseList;
