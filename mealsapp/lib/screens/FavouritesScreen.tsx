import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import MealGridTile from '../components/MealGridTile';
import {MEALS} from '../data/DummyData';

const FavouritesScreen = () => {
  const favouriteMealIds = useSelector(
    (state: any) => state.favouriteMeals.ids,
  );
  const displayedMeals = MEALS.filter(meal =>
    favouriteMealIds.includes(meal.id),
  );
  return (
    <FlatList
      style={styles.root}
      data={displayedMeals}
      keyExtractor={(item, _) => item.id}
      renderItem={item => <MealGridTile mealID={item.item.id} />}
    />
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, marginBottom: 30},
});

export default FavouritesScreen;
