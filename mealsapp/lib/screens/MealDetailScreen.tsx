import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/DummyData';
import List from '../components/List';
import Icon from '../components/Icon';

const MealDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const mealID = route.params?.mealID;
  const meal = MEALS.find(passedMeal => passedMeal.id === mealID);

  const heartPressHandler = () => {
    console.log('pressed');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        Icon({
          icon: 'fa-solid fa-heart',
          colour: 'white',
          size: 24,
          onPress: heartPressHandler,
        }),
      title: meal?.title,
    });
  }, [meal?.title, navigation]);
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri: meal?.imageUrl}} />
      <MealDetails textStyle={styles.textStyle} mealItem={meal} />
      <ScrollView>
        <View style={styles.maxWidth}>
          <View style={styles.headingBorder}>
            <Text style={[styles.subtitle, styles.subHeading]}>
              Ingredients
            </Text>
          </View>
        </View>
        <List data={meal!.ingredients} />
        <View style={styles.maxWidth}>
          <View style={styles.headingBorder}>
            <Text style={[styles.subtitle, styles.subHeading]}>Steps</Text>
          </View>
        </View>

        <List data={meal!.steps} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  image: {
    width: '100%',
    height: '30%',
    overflow: 'hidden',
  },
  subtitle: {
    fontSize: 14,
    marginVertical: '0.2%',
    color: '#DCEDFF',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3%',
  },
  headingBorder: {
    width: '80%',
    paddingTop: '5%',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginBottom: '4%',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  maxWidth: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
});

export default MealDetailScreen;
