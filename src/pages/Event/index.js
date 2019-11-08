import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

export default function Event({ navigation }) {

    const element = navigation.getParam('element')

    useEffect(() => {
        getData()
    }, [])

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@eventDataKey')
            if (value !== null) {
                EventData = JSON.parse(value)
            }
        } catch (e) {
            //
        }
    }

    removeData = async () => {
        try {
            await AsyncStorage.removeItem('@eventDataKey')
            navigation.navigate('Menu')
            alert("Evento Deletado")
        }
        catch (e) {
            alert(e);
        }
    }

    return (
        <View style={styles.mainContainer}>

            <Text style={styles.txtTitle}>{EventData[0]}</Text>
            <Text style={styles.txtTitle}>{EventData[1]}</Text>
            <Text style={styles.txtTitle}>{EventData[2]}</Text>
            <Text style={styles.txtTitle}>{EventData[3]}</Text>
            <Text style={styles.txtTitle}>{EventData[4]}</Text>



            <TouchableOpacity style={styles.btn} onPress={removeData}>
                <Icon name="check" size={20} color="white" style={{ alignSelf: "center" }} />
                <Text style={styles.txtBtn}>
                    Deletar este evento
                </Text>
            </TouchableOpacity>

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
        marginLeft: 10,
        marginBottom: 5,
        fontWeight: "bold"
    },
    txtBtn: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf:"center"
    },
    btn: {
        height: 50,
        width: "85%",
        borderRadius: 4,
        backgroundColor: "#FFA6A6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf:"center"
    }
})