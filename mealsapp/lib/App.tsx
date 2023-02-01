import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHeart as faHeartRegular} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouritesScreen from './screens/FavouritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#8F91A2'},
        headerShadowVisible: true,
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#94B0DA'},
      }}>
      <Drawer.Screen name="Meal Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{title: 'Your Favourited Meals'}}
      />
    </Drawer.Navigator>
  );
};

function App(): JSX.Element {
  library.add(faHeart);
  library.add(faHeartRegular);

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#8F91A2'},
            headerShadowVisible: true,
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#94B0DA'},
          }}>
          <Stack.Screen
            name="MealCategories"
            component={DrawerNavigator}
            options={{title: 'Categories', headerShown: false}}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
