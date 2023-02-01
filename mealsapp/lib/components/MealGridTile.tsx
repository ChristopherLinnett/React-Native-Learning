import React from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/DummyData';

const MealGridTile = ({mealID}: {mealID: string}) => {
  const mealItem = MEALS.find(meal => meal.id === mealID);

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: 'black'}}
        style={({pressed}) => [pressed ? styles.pressed : null]}>
        <View style={[styles.innerMealContainer]}>
          <Image style={styles.image} source={{uri: mealItem?.imageUrl}} />
          <Text style={styles.title}>{mealItem?.title}</Text>
        </View>
        <View style={styles.descriptiveRow}>
          <Text style={styles.descriptiveText}>{mealItem?.duration}min</Text>
          <Text style={styles.descriptiveText}>
            {mealItem?.complexity.toUpperCase()}
          </Text>
          <Text style={styles.descriptiveText}>{mealItem?.affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 6,
    elevation: 4,
  },
  buttonContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  descriptiveRow: {
    marginHorizontal: 16,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealItem: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 7,
    overflow: 'visible',
  },
  innerMealContainer: {borderRadius: 20, overflow: 'hidden'},
  descriptiveText: {
    fontSize: 12,
  },
  pressed: {
    opacity: Platform.OS === 'ios' ? 0.5 : 1,
    shadowOpacity: 0,
  },
});
export default MealGridTile;
