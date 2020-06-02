import React from 'react';
import { UserPasswordAuthProviderClient } from 'mongodb-stitch-react-native-sdk';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignUp = (props) => {
  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirmPassword, onChangeConfirmPassword] = React.useState('');
  const title = 'Waterly';
  const nameLabel = 'Name: ';
  const emailLabel = 'Email: ';
  const passwordLabel = 'Password: ';
  const confirmLabel = 'Confirm Password: ';

  const onPressSignUp = () => {
    const emailPasswordClient = props.client.auth
        .getProviderClient(UserPasswordAuthProviderClient.factory);

    if(password === confirmPassword) {
        emailPasswordClient.registerWithEmail(email, password)
            .then(() => console.log("Successfully sent account confirmation email!"))
            .catch(err => console.error("Error registering new user:", err));
    }
    else {
        console.log("Passwords do not match! Try again");
    }
  };

  return (
    <View style={styles.login}>
      <Text style={styles.title}> {title} </Text>
      <View style={styles.formRow}>
        <Text style={styles.label}> {nameLabel} </Text>
        <TextInput
          onChangeText={text => onChangeName(text)}
          value={name}
          style={styles.input}
        />
      </View>
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
      <View style={styles.formRow}>
        <Text style={styles.label}> {confirmLabel} </Text>
        <TextInput
          onChangeText={text => onChangeConfirmPassword(text)}
          value={confirmPassword}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={() => {onPressSignUp()}} style={styles.btnHolder}>
        <Text style={styles.btn}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkHolder}>
        <Text style={styles.signup}>Or login?</Text>
      </TouchableOpacity>
    </View>
  );
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

export default SignUp;
