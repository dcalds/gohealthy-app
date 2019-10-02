import React, { useState } from 'react';
import {
    Text, View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, TextInput, ScrollView, Animated
} from 'react-native';

import first from '../../assets/first.png'
import second from '../../assets/second.png'
import third from '../../assets/third.png'

export default function Intro({ navigation }) {

    const dots = [1, 2, 3]
    scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, screenWidth)

    return (
        <>
            <ScrollView horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event( // Animated.event returns a function that takes an array where the first element...
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
                        )}
                        scrollEventThrottle={16}>

                <StatusBar barStyle="light-content" backgroundColor="#151C48" />

                <View style={styles.screen}>

                    <Image source={first} resizeMode="contain" style={styles.img} />

                    <Text style={styles.txtScreen}> Seja fitness bem rápido</Text>

                </View>

                <View style={styles.screen}>

                    <Image source={second} resizeMode="contain" style={styles.img} />

                    <Text style={styles.txtScreen}> Fique gostosa malhando</Text>

                </View>

                <View style={styles.screen}>

                    <Image source={third} resizeMode="contain" style={styles.img} />

                    <Text style={styles.txtScreen}> Vire o verdadeiro monstro</Text>
                </View>

            </ScrollView>

            <View style={{ backgroundColor: "#151C48", height: 70, width: screenWidth, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    {dots.map((_, i) => {
                        
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
                            outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
                            extrapolate: 'clamp' // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
                        });

                        return (
                                <Animated.View // we will animate the opacity of the dots later, so use Animated.View instead of View here
                                    key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                                    style={{ opacity, height: 10, width: 10, backgroundColor: '#f2f2f8', margin: 8, borderRadius: 5 }}
                                />
                        );
                    })}
                </View>
            </View>

            <TouchableOpacity style={styles.bottomButton} onPress={() => { navigation.navigate('Main') }}>

                <Text style={styles.txtBtn}>Vamos começar</Text>

            </TouchableOpacity>

        </>
    );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    img: {
        height: 250,
        width: 250,
        marginBottom: 50,
        marginTop: 15
    },
    screen: {
        height: screenHeight - 130,
        width: screenWidth,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#151C48"
    },
    txtBtn: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    txtScreen: {
        fontSize: 22,
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
    },
    bottomButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: screenWidth,
        backgroundColor: "#00A1D7"
    }
})