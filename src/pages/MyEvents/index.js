import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MyEvents({ navigation }) {

    const [create, setCreate] = useState([1,2,3,4,5])
    const [participante, setParticipante] = useState([1,2,3,4,5])

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

    return (
        <View style={styles.mainContainer}>

            <View style={styles.myEvents}>
                <Text style={styles.txtMyEvents}> Eventos do Danilo </Text>
            </View>

            <View>
                <Text style={styles.txtMyEventsSecondary}> Criados </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                    {create.map((e,i) => <View key={i} style={styles.evetCard}></View>)}
                </ScrollView>
            </View>

            <View>
                <Text style={styles.txtMyEventsSecondary}> Participando </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                    {participante.map((e,i) => <View key={i} style={styles.partCard}></View>)}
                </ScrollView>
            </View>

            <View style={styles.btnCreateEventLabel}>
                <TouchableOpacity style={styles.btnCreateEvent} onPress={() => { navigation.navigate('CreateEvent') }}>
                    <Icon name="add-circle" size={20} color="white" style={{ marginRight: 5 }} />
                    <Text style={styles.btnCreateEventText}>
                        Criar Evento
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#151C48"
    },
    myEvents: {
        height: 50,
        width: screenWidth,
        marginTop: 15
    },
    txtMyEvents: {
        fontSize: 27,
        color: "white",
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: "bold"
    },
    txtMyEventsSecondary:{
        fontSize: 18,
        color: "white",
        marginLeft: 30,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: "bold"
    },
    evetCard: {
        height: 90,
        width: 90,
        margin: 15,
        backgroundColor: "skyblue",
        borderRadius: 4
    },
    partCard: {
        height: 90,
        width: 90,
        margin: 15,
        backgroundColor: "white",
        borderRadius: 4
    },
    btnCreateEventLabel: {
        justifyContent: "center",
        alignItems: "center"
    },
    btnCreateEvent: {
        height: 50,
        width: "85%",
        borderRadius: 4,
        backgroundColor: "skyblue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    btnCreateEventText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }
})