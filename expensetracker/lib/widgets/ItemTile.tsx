import React from 'react';
import {Text, View} from 'react-native';
import Expense from '../models/expense';

type ItemTileProps = {item: Expense};

const ItemTile = (itemData: ItemTileProps) => {
  return (
    <View>
      <Text>{itemData.item.description}</Text>
    </View>
  );
};

export default ItemTile;
