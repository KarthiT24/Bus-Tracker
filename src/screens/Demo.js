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


export default Demo(){
    return (
        <View style={styles.container}>
          <FlatList 
            style={styles.contentList}
            columnWrapperStyle={styles.listContainer}
            data={this.state.data}
            keyExtractor= {(item) => {
              return item.id;
            }}
            renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card}>
                <Image style={styles.image} source={require('../../assets/B1.png')}/>
                <View style={styles.cardContent}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.busno}>{item.busno}</Text>
                  <Text style={styles.count}>{item.count}</Text>
                  <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followButtonText}>Explore now</Text>  
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}}/>
        </View>
      );
}

