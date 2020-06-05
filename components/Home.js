import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {v4 as uuid} from 'uuid';

import ListItem from './ListItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = (props) => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'name1',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/3.jpg',
      name: 'name2',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/4.jpg',
      name: 'name3',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/5.jpg',
      name: 'name4',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/10.jpg',
      name: 'name5',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/8.jpg',
      name: 'name6',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/20.jpg',
      name: 'name7',
    },
    {
      id: uuid(),
      imgSrc: 'https://randomuser.me/api/portraits/women/1.jpg',
      name: 'name8',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Text style={styles.waterPlantsBtn}>Water Plants</Text>
        <Text style={styles.addPlantBtn} onPress={() => props.navigation.navigate('Add Plant')}>+</Text>
      </View>
      <ScrollView contentContainerStyle={styles.imgGalleryContainer}>
        {items.map((item, index) => (
          <TouchableOpacity 
            style={styles.itemGallery} 
            onPress={() => props.navigation.navigate('Edit Plant')}
          >
            <ListItem item={item}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  waterPlantsBtn: {
    borderColor: 'blue',
    color: 'blue',
    borderWidth: 2,
    height: 30,
    padding: 5,
  },
  addPlantBtn: {
    fontSize: 40,
    marginRight: 10,
    paddingBottom: 5,
  },
  imgGalleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  itemGallery: {
    alignContent: 'center',
  },
});

export default Home;
