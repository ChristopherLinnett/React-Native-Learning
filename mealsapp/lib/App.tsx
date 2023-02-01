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

const Stack = createNativeStackNavigator();

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
            component={CategoriesScreen}
            options={{title: 'Categories'}}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
