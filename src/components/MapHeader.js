import React,{useState,useEffect} from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
export default function MapHeader(){
    
  
    return(
        <View style={stylesheet.mainContainer}>
        <View style={stylesheet.container}>
            <View style={stylesheet.container1}>
                <Icon name="location" size={25} type="ionicon" style={{paddingTop:4.5}} color="red"></Icon>
                <Text style={stylesheet.text1}>K.K.Nagar</Text>
            </View>
            <View>

            <View style={stylesheet.container2}>
                <Icon name="md-bus" size={25} type="ionicon"  color='darkgoldenrod' style={{marginTop:5}}></Icon>
                <Text style={stylesheet.text2}>2</Text>
            </View>
            </View> 
        </View>
    </View>        
    )
}
const height=Dimensions.get("window").height;
const weight=Dimensions.get("window").width;
const stylesheet=StyleSheet.create({
    mainContainer:{
        flexDirection:"row",
        width:weight,
        backgroundColor:"white",
        height:80
    },
    container:{
        flexDirection:"column",
        width:weight-200,
        backgroundColor:"white",
        height:130,
        
    },
    container1:{
        flexDirection:"row",
        paddingLeft:20
    },
    text1:{
        marginLeft:5,
        fontSize:25,
        color:"dcdcdc",
        fontStyle:"bold",
        marginTop:2
    },
    container2:{
        flexDirection:"row",
        paddingLeft:20
    },
    text2:{
        marginLeft:5,
        fontSize:25,
        color:"dcdcdc",
        fontStyle:"bold",
    },
    sidecontainer:{ 
        backgroundColor:"white",
        paddingLeft: 8,
        width: 100,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})