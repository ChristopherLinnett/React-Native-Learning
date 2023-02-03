import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import AllExpenses from './pages/AllExpenses';
import EditExpense from './pages/EditExpense';
import RecentExpenses from './pages/RecentExpenses';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabsComponent = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabsComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen name="EditExpense" component={EditExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
