import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import colours from './constants/colours';
import {Icons} from './constants/Icons';
import {GlobalTheme} from './constants/theme';
import AllExpenses from './pages/AllExpenses';
import EditExpense from './pages/EditExpense';
import RecentExpenses from './pages/RecentExpenses';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabsComponent = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalTheme.colors.primary800},
        headerTintColor: colours.white,
        tabBarStyle: {backgroundColor: GlobalTheme.colors.primary800},
        tabBarActiveTintColor: colours.white,
        tabBarInactiveTintColor: GlobalTheme.colors.primary400,
      }}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => Icons.hourglass(color, size),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => Icons.calendar(color, size),
        }}
      />
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
