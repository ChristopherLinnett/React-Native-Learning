import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import Meal from '../models/meal';

const MealDetails = ({mealItem, textStyle = {}}: MealDetailsProps) => {
  return (
    <View style={styles.descriptiveRow}>
      <Text style={[styles.descriptiveText, textStyle]}>
        {mealItem?.duration}min
      </Text>
      <Text style={[styles.descriptiveText, textStyle]}>
        {mealItem?.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.descriptiveText, textStyle]}>
        {mealItem?.affordability}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptiveRow: {
    width: '100%',
    marginHorizontal: 16,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  descriptiveText: {
    fontSize: 12,
  },
});

export default MealDetails;

type MealDetailsProps = {
  mealItem: Meal | undefined;
  textStyle?: TextStyle;
};
