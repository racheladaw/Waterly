
// mongodb stitch sdk reference for setting up client connection with db
//https://docs.mongodb.com/stitch-sdks/js-react-native/4/index.html

// "context" docs for passing props through stack.screen
//https://reactjs.org/docs/context.html

import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

import Login from './components/Login';
import Home from './components/Home';

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
      <View style={styles.container}>
        <Text style={styles.text}> {loginStatus} </Text>
        <Login client={this.state.client} setCurrentUserId={this.setCurrentUserId}/>
      </View>
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
