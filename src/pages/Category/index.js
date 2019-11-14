import React, { useState } from 'react';
import {
  KeyboardAvoidingView, Text, View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, TextInput, ScrollView
} from 'react-native';

export default function Category ({ navigation }) {

    const element = navigation.getParam('element')

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.txtTitle}>{ element }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: { 
        flex: 1,
        backgroundColor: "#151C48"
    },
    txtTitle: {
        fontSize: 24,
        color: "white",
        margin: 15,
        fontWeight: "bold"
    }
})