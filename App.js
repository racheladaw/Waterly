// "context" docs for passing props through stack.screen
//https://reactjs.org/docs/context.html
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Stitch } from 'mongodb-stitch-react-native-sdk';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      currentUserId: undefined,
      client: undefined
    };
    this.loadClient = this.loadClient.bind(this);
    this.setCurrentUserId = this.setCurrentUserId.bind(this);
  }

  componentDidMount() {
    console.log("component mounted")
    this.loadClient();
  }

  setCurrentUserId(userId) {
    this.setState({ currentUserId: userId })
    console.log(`Successfully logged in as user ${userId}`);
  }

  loadClient() {
    Stitch.initializeDefaultAppClient('waterly-qyngc').then(client => {
      this.setState({ client });

      if(client.auth.isLoggedIn) {
        this.setState({ currentUserId: client.auth.user.id })
      }
    });
    console.log("client loaded")
  }

  render() {
    let loginStatus = "Currently logged out."

    if(this.state.currentUserId) {
      loginStatus = `Currently logged in as ${this.state.currentUserId}!`
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 50,
  },
});
