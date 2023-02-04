import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import colours from './constants/colours';
import {Icons} from './constants/Icons';
import {GlobalTheme} from './constants/theme';
import AllExpenses from './pages/AllExpenses';
import EditExpense from './pages/EditExpense';
import RecentExpenses from './pages/RecentExpenses';
import {PremadeIcon} from './widgets/IconButton';
import {RootStackParamList, RootTabsParamList} from './constants/routeparams';
import ExpensesContextProvider from './store/expenses.context';

const BottomTabs = createBottomTabNavigator<RootTabsParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const BottomTabsComponent = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}: {navigation: NavigationProp<any, any>}) => {
        return {
          headerStyle: {backgroundColor: GlobalTheme.colors.primary400},
          headerTintColor: colours.white,
          tabBarStyle: {backgroundColor: GlobalTheme.colors.primary400},
          tabBarActiveTintColor: colours.white,
          tabBarInactiveTintColor: GlobalTheme.colors.primary800,
          headerRight: ({tintColor}) =>
            PremadeIcon('add', tintColor, () =>
              navigation.navigate('EditExpense', undefined),
            ),
        };
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
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: GlobalTheme.colors.primary400},
              headerTintColor: colours.white,
              contentStyle: {backgroundColor: GlobalTheme.colors.primary800},
            }}>
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabsComponent}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EditExpense"
              component={EditExpense}
              options={{presentation: 'modal'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

export default App;
