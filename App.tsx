import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import PhoneSectionList from './src/pages/PhoneSectionListPage';
import FlatColoredList from './src/pages/FlatColoredListPage';
import TodoListPage from './src/pages/todoListPage';

const Tabs = createMaterialTopTabNavigator();

const Routes = Object.freeze({
  Task1: 'Task1',
  Task2: 'Task2',
  Task3: 'Task3',
});

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen
            options={{tabBarLabel: 'Task 1'}}
            name={Routes.Task1}
            component={FlatColoredList}
          />
          <Tabs.Screen
            options={{tabBarLabel: 'Task 2'}}
            name={Routes.Task2}
            component={PhoneSectionList}
          />
          <Tabs.Screen
            options={{tabBarLabel: 'Task 3'}}
            name={Routes.Task3}
            component={TodoListPage}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    paddingTop: 0,
    flex: 1,
  },
});

export default App;
