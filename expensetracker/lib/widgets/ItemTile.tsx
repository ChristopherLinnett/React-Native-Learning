import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../constants/routeparams';
import {GlobalTheme} from '../constants/theme';
import Expense from '../models/expense';

type ItemTileProps = {item: Expense};

export const ItemTileBuilder = (itemData: ItemTileProps) => {
  return <ItemTile itemData={itemData} />;
};

const ItemTile = ({itemData}: {itemData: ItemTileProps}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const itemPressHandler = () => {
    itemData.item.id != null
      ? navigation.navigate('EditExpense', {expenseID: itemData.item.id})
      : navigation.navigate('EditExpense', undefined);
  };

  return (
    <Pressable
      onPress={itemPressHandler}
      style={({pressed}) => pressed && styles.pressed}
      android_ripple={{color: 'white'}}>
      <View style={styles.expenseItem}>
        <View style={styles.widthConstrain}>
          <Text style={[styles.textBase, styles.description]}>
            {itemData.item.description}
          </Text>
          <Text style={styles.textBase}>
            {itemData.item.date.toDateString()}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${itemData.item.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalTheme.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 4,
    shadowColor: GlobalTheme.colors.accent500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalTheme.colors.primary50,
  },
  widthConstrain: {
    maxWidth: '80%',
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 90,
    height: 40,
  },
  amount: {
    color: GlobalTheme.colors.primary500,
    fontWeight: 'bold',
  },
});

export default ItemTile;
