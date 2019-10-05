import React, { useState } from 'react';
import {
  KeyboardAvoidingView, Text, View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, TextInput, ScrollView
} from 'react-native';

export default function Event ({ navigation }) {

    const element = navigation.getParam('element')

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>{ element }</Text>
        </View>
    );
}