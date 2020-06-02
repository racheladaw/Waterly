import React from 'react';
import { UserPasswordCredential } from 'mongodb-stitch-react-native-sdk';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = (props) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const title = 'Waterly';
  const emailLabel = 'Email: ';
  const passwordLabel = 'Password: ';

  const onPressLogin = () => {
    const credential = new UserPasswordCredential(email, password)
      props.client.auth.loginWithCredential(credential)
      // Returns a promise that resolves to the authenticated user
      .then(authedUser => console.log(`successfully logged in with id: ${authedUser.id}`))
      .catch(err => console.error(`login failed with error: ${err}`))
  };

  return (
    <View style={styles.login}>
      <Text style={styles.title}> {title} </Text>
      <View style={styles.formRow}>
        <Text style={styles.label}> {emailLabel} </Text>
        <TextInput
          onChangeText={text => onChangeEmail(text)}
          value={email}
          style={styles.input}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}> {passwordLabel} </Text>
        <TextInput
          onChangeText={text => onChangePassword(text)}
          value={password}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={() => {onPressLogin()}} style={styles.btnHolder}>
        <Text style={styles.btn}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkHolder}>
        <Text style={styles.signup}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkHolder}>
        <Text style={styles.signup} onPress={() =>
          props.navigation.navigate('SignUp')
        }>Click to Sign Up</Text>
      </TouchableOpacity>
    </View>
  );

  // _onPressLogout() {
  //   this.state.client.auth.logout().then(user => {
  //       console.log(`Successfully logged out`);
  //       this.setState({ currentUserId: undefined })
  //   }).catch(err => {
  //       console.log(`Failed to log out: ${err}`);
  //       this.setState({ currentUserId: undefined })
  //   });
  // }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 120,
  },
  login: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 30,
  },
  input: {
    width: 180,
    height: 40,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  formRow: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  label: {
    textAlign: 'right',
    minWidth: 40,
    width: 125,
    fontSize: 25,
    marginEnd: 40,
  },
  btn: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    color: 'black',
    fontSize: 20,
    padding: 8,
    width: 150,
    textAlign: 'center',
  },
  btnHolder: {
    marginTop: 90,
    marginBottom: 10,
    alignItems: 'center',
  },
  linkHolder: {
    marginTop: 10,
    alignItems: 'center',
  },
  signup: {
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default Login;
