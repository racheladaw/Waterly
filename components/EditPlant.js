import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import { StateContext } from './StateProvider';

const EditPlant = (props) => {
  const [plantName, setPlantName] = React.useState('Begonia');
  const [wateringFreq, setWateringFreq] = React.useState('');
  const [image, setImage] = React.useState('');
  
  const plantNameLabel = 'Plant Name: ';
  const wateringFreqLabel = 'Watering Frequency: ';
  const imageLabel = 'Image: ';

  const onPressSubmit = (state) => {

  }

  return (
    <StateContext.Consumer>
    {(context) => (  
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {plantName} </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formRow}>
            <Text style={styles.label}> {plantNameLabel} </Text>
            <TextInput
              onChangeText={text => setPlantName(text)}
              value={plantName}
              style={styles.input}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}> {wateringFreqLabel} </Text>
            <TextInput
              onChangeText={text => setWateringFreq(text)}
              value={wateringFreq}
              style={styles.input}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}> {imageLabel} </Text>
            <TextInput
              onChangeText={text => setImage(text)}
              value={image}
              style={styles.input}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => {onPressSubmit(context.state)}} style={styles.btnHolder}>
            <Text style={styles.btn}>Submit</Text>
        </TouchableOpacity>
      </View>
      )}
    </StateContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginVertical: 30,
  },
  titleContainer: {
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
  },
  formContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    width: 180,
    // height: 'auto',
    padding: 10,
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
    justifyContent: 'center',
  },
  btnHolder: {
    alignItems: 'center',
    flex: 2,
  },
});

export default EditPlant;
