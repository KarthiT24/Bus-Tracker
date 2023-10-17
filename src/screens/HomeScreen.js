import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';
import Card from '../components/Card';

const bus=[

  {
    id:1,
    busno1:"1",
    busno2:"2",
    busno3:"3",
    Area:"Pudukottai"
  },
  
  {
    id:2,
    busno1:"12",
    busno2:"22",
    busno3:"32",
    Area:"BHEL"
  },
  
  {
    id:3,
    busno1:"13",
    busno2:"23",
    busno3:"33",
    Area:"K.K.Nagar"
  },
  
  {
    id:4,
    busno1:"14",
    busno2:"24",
    busno3:"34",
    Area:"Chathram"
  },
  
  {
    id:5,
    busno1:"15",
    busno2:"25",
    busno3:"35",
    Area:"Central"
  },
  {
    id:6,
    busno1:"15",
    busno2:"25",
    busno3:"35",
    Area:"Lalgudi"
  },
  {
    id:7,
    busno1:"15",
    busno2:"25",
    busno3:"54",
    Area:"Airport"
  }
]

const HomeScreen = () => {
  return (

      <FlatList
        data={bus}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(bus) => bus.id.toString()}
        showsVerticalScrollIndicator={false}
      />

  );
}

export default HomeScreen