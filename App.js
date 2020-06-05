import React from 'react'
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddPlant from './components/AddPlant';
import EditPlant from './components/EditPlant';
import { StateProvider } from './components/StateProvider';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <StateProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sign Up" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Add Plant" component={AddPlant} />
            <Stack.Screen name="Edit Plant" component={EditPlant} />
          </Stack.Navigator>
        </NavigationContainer>
      </StateProvider>
    );
  }
}

const styles = StyleSheet.create({
});
