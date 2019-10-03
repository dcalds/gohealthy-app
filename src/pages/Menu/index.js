import React, { useState } from 'react';
import {
  KeyboardAvoidingView, Text, View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity, TextInput, ScrollView
} from 'react-native';

import test from '../../assets/test.png';
import test2 from '../../assets/test2.png';
import logo from '../../assets/logo.png';

export default function Menu({ navigation }) {

  const [busca, setBusca] = useState(null)
  const [modalidades, setModalidades] = useState(["Corrida", "Caminhada", "Futebol", "Aeróbico", "Academia"])
  const [destaques, setSestaques] = useState(["Amar e não ser amado", "Cornos na ativa", "Corrida dos Idosos", "Pelada dos Primos do Maiobão", "Caminhada da Primeira Idade"])

  function handleText(novaBusca) {
    setBusca(novaBusca)
  }

  return (
    <>

      <KeyboardAvoidingView eneabled style={styles.mainContainer}>

        <Image resizeMode="contain" style={{height: 40, width: screenWidth,margin: 10}} source={logo}/>

        <StatusBar barStyle="light-content" backgroundColor="#151C48" />

        <View style={styles.input}>
          <TextInput style={{ color: "#242424", marginLeft: 20 }}
            onChangeText={handleText}
            placeholder="Busque um evento" />
        </View>

        {/* EVENTOS POR CATEGORIA */}

        <View style={{ height: 150, width: "100%", marginTop: 20 }}>

          <Text style={styles.txt}> Eventos por categoria {busca} </Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {
              modalidades.map((element, index) => {

                return (
                  <ImageBackground key={index} source={test2} style={styles.imgBkg}>

                    <Text style={styles.txtCat}> {element} </Text>

                  </ImageBackground>)

              })
            }

          </ScrollView>

        </View>

        {/* EVENTOS PRÓXIMOS */}

        <View style={{ height: 300, width: "100%", marginTop: 5 }}>

          <Text style={styles.txt}> Confira os próximos eventos </Text>

          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>

            {
              destaques.map((element, index) => {
                return (

                  <TouchableOpacity key={index} style={styles.rowEvents}>

                    <View style={{ flexDirection: "row" }}>
                      <Image
                        style={{ height: 75, width: 75, marginLeft: 0 }}
                        source={test}
                      />

                      <View style={{ marginTop: 8 }}>

                        <Text style={styles.txtEvt}> {element} </Text>

                        <View style={{ flexDirection: "row" }}>
                          <Text style={styles.txtEvtDet}>Data: 25/25/2025 </Text>
                          <Text style={styles.txtEvtDet}>Local: Centro </Text>
                        </View>

                      </View>
                    </View>

                  </TouchableOpacity>

                )
              })
            }

          </ScrollView>

        </View>
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={() => {navigation.navigate('Profile')}} style={styles.btn}>
        <Text style={styles.txt}>Prefil</Text>
      </TouchableOpacity>

    </>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    height: screenHeight - 75,
    alignItems: "center",
    backgroundColor: "#151C48"
  },
  input: {
    height: 48,
    width: "95%",
    borderRadius: 4,
    backgroundColor: "#f2f2f8",
    display: "flex",
    justifyContent: "center",
    marginTop: 10
  },
  btn: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "#00A1D7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imgBkg: {
    margin: 8,
    height: 100,
    width: 100,
    borderRadius: 8,
    backgroundColor: "#f2f2f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  rowEvents: {
    margin: 10,
    height: 75,
    borderRadius: 8,
    width: "95%",
    backgroundColor: "#f2f2f8",
    justifyContent: "center",
  },
  txt: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold"
  },
  txtCat: {
    fontSize: 16,
    color: "white",
  },
  txtEvt: {
    fontSize: 20,
    color: "#151C48",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10
  },
  txtEvtDet: {
    fontSize: 12,
    color: "#00A1D7",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 17
  }
})