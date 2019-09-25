import React from 'react';
import {
    Text ,View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,TouchableOpacity, TextInput, ScrollView
  } from 'react-native';
import first from '../../assets/first.jpg';
import second from '../../assets/second.jpg';
import third from '../../assets/third.jpg';

export default function Intro ({ navigation }) {
    
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    return (
        
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>

            <View style={{
                width: screenWidth,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#080808"
            }}>
                <Image source={first} style={{height: screenWidth, width: screenWidth}}/>

            </View>

            <View style={{
                width: screenWidth,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#121212"
            }}>
                <Image source={second} style={{height: screenWidth, width: screenWidth}}/>  
            
            </View>

            <View style={{
                width: screenWidth,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#181818"
            }}>

                <TouchableOpacity style={styles.btnInvisible} >
                </TouchableOpacity>

                <Image source={third} style={{height: screenWidth, width: screenWidth}}/>                 

                <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Main')}}>
                    <Text style={styles.txtBtn}>Vamos começar</Text>
                </TouchableOpacity>
                
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    btn: {
        height: 50,
      width: 270,
      borderRadius: 8,
      marginTop: 15,
      backgroundColor: "#ff6816",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    txtBtn: {
        fontSize: 16, 
        color: "white"
    },
    txtScreen: {
        fontSize: 24,
        fontWeight: "bold", 
        color: "white"
    },
    btnInvisible: {
        height: 50,
      width: 270,
      borderRadius: 8,
      marginTop: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
})