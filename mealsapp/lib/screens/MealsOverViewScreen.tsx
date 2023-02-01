import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {FlatList, View} from 'react-native';
import MealGridTile from '../components/MealGridTile';
import {CATEGORIES, MEALS} from '../data/DummyData';

const MealsOverviewScreen = () => {
  const navigation = useNavigation();
  const route: RouteProp<ParamListBase> = useRoute();
  const categoryID: string = route.params?.categoryID;
  const displayedMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(categoryID),
  );
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => categoryID === category.id,
    )?.title;
    navigation.setOptions({title: categoryTitle});
  });
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, _) => item.id}
        renderItem={item => <MealGridTile mealID={item.item.id} />}
      />
    </View>
  );
};

export default MealsOverviewScreen;
