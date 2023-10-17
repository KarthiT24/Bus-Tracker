import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions, Alert, ScrollView } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Icon } from 'react-native-elements';

export default function Pudukottai({info}){
  const navigation = useNavigation()

  const onclickevent = ()=>{
    navigation.navigate('Map Screen')
}
   return(
    
    <View style={styles.container}>
                        <TouchableOpacity style={styles.card}>
                                <Image style={styles.image} source={require('../../assets/B1.png')}/>
                                <Collapse>
                                <CollapseHeader>
                                        <View style={styles.cardContent}>
                                        <Text style={styles.name}>{info.Area}</Text>
                                        </View>
                                </CollapseHeader>
                                    <CollapseBody>
                                        <View style={styles.cb}>
                                            <TouchableOpacity style={styles.followButton1} onPress={onclickevent}>
                                                    <Text style={styles.followButtonText1} >{info.busno1}</Text> 
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.followButton1} onPress={onclickevent}>
                                                    <Text style={styles.followButtonText1} >{info.busno2}</Text> 
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.followButton1} onPress={onclickevent}>
                                                    <Text style={styles.followButtonText1} >{info.busno3}</Text> 
                                            </TouchableOpacity>
                                        </View>
                                    </CollapseBody>
                                </Collapse>
                         </TouchableOpacity>
                    
    </View>
   )
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#ebf0f7"
    },
    contentList:{
      flex:1,
    },
    cardContent: {
      marginLeft:20,
      marginTop:10
    },
    image:{
      width:85,
      height:85,
      borderRadius:45,
      borderWidth:2,
      borderColor:"#ebf0f7",
      marginTop:10
    },
    
    card:{
      shadowColor: 'blue',
      marginTop:10,
      marginBottom:10,
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: .25,
      shadowRadius: 10,
      elevation:3,
        
      marginLeft: 20,
      marginRight: 20,

      backgroundColor:"white",
      paddingLeft: 10,
      paddingRight:10,
      paddingBottom:10,
      flexDirection:'row',
      borderRadius:30,
    },
  
    name:{
      fontSize:16,
    //   flex:1,
      alignSelf:'center',
      color:"#3399ff",
      fontWeight:'bold',
      marginTop:20,
      marginLeft:14
    },
    followButton: {
      marginTop:10,
      height:35,
      width:100,
      padding:10,
    //   flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
    //   backgroundColor: "white",
      borderWidth:1,
      borderColor:"#dcdcdc",
    },
    followButtonText1:{
      color: "black",
      fontSize:12,
      flexDirection: "column",
      fontWeight:'normal',
    },
    followButton1:{
        // marginTop:10,
        height:40,
        width:40,
        padding:10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "white",
        borderWidth:1,
        borderColor:"midnightblue",
        marginTop:10,
        marginLeft:13
    },
    cb:{
        flexDirection:"row",
        marginLeft:10
    }
  
  });