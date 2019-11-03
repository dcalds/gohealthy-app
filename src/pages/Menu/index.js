import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, View, Image, StyleSheet, Dimensions, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';




export default function Menu({ navigation }) {

  const username = navigation.getParam('username')

  const [busca, setBusca] = useState(null)
  const [modalidades, setModalidades] = useState(["Corrida", "Caminhada", "Futebol", "Aeróbico", "Academia"])
  const [destaques, setSestaques] = useState(["Passeio no parque", "Corrida pela saúde", "Idosos na ativa", "Pernas pra que te quero", "Pelada dos Primos do Maiobão", "Caminhada da Primeira Idade"])

  function handleSearch(novaBusca) {
    setBusca(novaBusca)
  }

  return (
    <KeyboardAvoidingView eneabled style={styles.mainContainer}>

      <View
        style={styles.welcome}
        onPress={() => { navigation.navigate('Profile', { username }) }} >
        <Text style={styles.txtWelcome}>
          Olá, {username != '' ? username : 'Visitante'}!
        </Text>
      </View>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        onChangeText={handleSearch}
        placeholder="Busque um evento"
      />

      {/* EVENTOS POR CATEGORIA */}

      <View style={styles.categContainer}>
        <Text style={styles.txtSecondary}> Eventos por categoria </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {modalidades.map((element, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.categTag}
                onPress={() => { navigation.navigate('Category', { element }) }}>
                <Text style={styles.categText}> {element} </Text>
              </TouchableOpacity>)
          })}
        </ScrollView>

      </View>

      {/* CONFIRA OS PRÓXIMOS EVENTOS */}

      <View style={styles.eventContainer}>
        <Text style={styles.txtSecondary}> Confira os próximos eventos </Text>
        <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}
          indicatorStyle="white">
          {destaques.map((element, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.eventCard}
                onPress={() => { navigation.navigate('Event', { element }) }}>
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ backgroundColor: "skyblue", height: 75, width: 75, marginLeft: 0, borderRadius: 4 }} />
                  <View style={{ marginTop: 8 }}>
                    <Text style={styles.eventText}> {element} </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.eventTextSecondary}>Data: 25/25/2025 </Text>
                      <Text style={styles.eventTextSecondary}>Local: Centro </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>)
          })}
        </ScrollView>

      </View>
    </KeyboardAvoidingView>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    height: screenHeight,
    alignItems: "center",
    backgroundColor: "#151C48"
  },
  welcome: {
    height: 50,
    width: screenWidth,
    marginTop: 10
  },
  txtWelcome: {
    fontSize: 28,
    color: "white",
    marginLeft: 20,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 48,
    width: "85%",
    borderRadius: 4,
    marginTop: 6,
    backgroundColor: "#f2f2f8",
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 15
  },
  txtSecondary: {
    fontSize: 22,
    color: "white",
    marginLeft: 12,
    marginBottom: 5,
    fontWeight: "bold"
  },
  categContainer: {
    height: 90,
    width: "100%",
    marginTop: 20
  },
  categText: {
    fontSize: 16,
    color: "white",
  },
  categTag: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
    height: 45,
    width: 100,
    borderRadius: 4,
    backgroundColor: "skyblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  eventContainer: {
    height: 500,
    width: "100%",
    marginTop: 15
  },
  eventCard: {
    height: 75,
    borderRadius: 4,
    width: "85%",
    backgroundColor: "#f2f2f8",
    justifyContent: "center",
    alignSelf: "center",
    margin: 12
  },
  eventText: {
    fontSize: 20,
    color: "#151C48",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10
  },
  eventTextSecondary: {
    fontSize: 12,
    color: "#00A1D7",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 17
  },
  btn: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "#00A1D7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})