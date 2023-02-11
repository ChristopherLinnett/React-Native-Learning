/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  NavigationContainer,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import IconButton from './components/UI/IconButton';
import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}: {navigation: NavigationProp}) => ({
              title: 'Your Favourite Places',
              headerRight: ({tintColor}) => (
                <IconButton
                  icon="add"
                  size={30}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{title: 'Add New Place'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
