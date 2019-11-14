import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

export default function Event({ navigation }) {

    const eventName = navigation.getParam('e')

    const [eventStatus, setEventStatus] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    getData = async () => {
        try {
            // something
        } catch (e) {
            alert(e)
        }
    }

    startEvent = async () => {
        try {
            alert("Evento Iniciado")
            setEventStatus(true)
        }
        catch (e) {
            alert(e)
        }
    }

    endEvent = async () => {
        try {
            alert("Evento Finalizado")
            navigation.navigate('Menu')
        }
        catch (e) {
            alert(e)
        }
    }

    return (
        <View style={styles.mainContainer}>

            {
            eventStatus ?            
            <TouchableOpacity style={styles.btnEnd} onPress={endEvent}>
                <Icon name="close" size={20} color="white" style={{ alignSelf: "center" }} />
                <Text style={styles.txtBtn}>
                    Finalizar Evento
                </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.btnStart} onPress={startEvent}>
                <Icon name="check" size={20} color="white" style={{ alignSelf: "center" }} />
                <Text style={styles.txtBtn}>
                    Iniciar Evento
                </Text>
            </TouchableOpacity>
            }

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
    },
    txtBtn: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        margin: 10
    },
    btnStart: {
        margin: 20,
        height: 50,
        width: "85%",
        borderRadius: 4,
        backgroundColor: "skyblue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center"
    },
    btnEnd: {
        margin: 20,
        height: 50,
        width: "85%",
        borderRadius: 4,
        backgroundColor: "#FFA6A6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center"
    }
})