import React from 'react';
import {
    Text ,View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,TouchableOpacity, TextInput
  } from 'react-native';
import logo from '../../assets/logo.png';

export default function Menu ({ navigation }) {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#181818" />
        
        <View style={styles.mainContainer}>

          <Image source={logo} style={{height: 38, width: 208, marginBottom: 30, marginTop:50}}/>

          <View style={styles.input}>
            <TextInput style={{color: "#242424", marginLeft: 20}} placeholder="Usuário, email ou telefone"/>
          </View>

          <View style={styles.input}>
            <TextInput style={{color: "#242424", marginLeft: 20}} placeholder="Senha"/>
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Menu')}>
            <Text style={{fontSize: 18, color: "white", fontWeight: "bold"}}> Entrar </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{fontSize: 16, color: "white", marginTop: 15}}> Login com conta do Google </Text>
          </TouchableOpacity>

          <Text style={{fontSize: 12, color: "white", marginTop: 5}}> ou </Text>

          <TouchableOpacity>
            <Text style={{fontSize: 16, color: "white", marginTop: 5}}>Cadastre-se  </Text>
          </TouchableOpacity>

        </View>
      </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#181818"
    },
    input: {
      height: 50,
      width: 270,
      borderRadius: 8,
      marginTop: 8,
      backgroundColor: "#f2f2f8",
      display: "flex",
      justifyContent: "center"
    },
    btn: {
      height: 50,
      width: 270,
      borderRadius: 8,
      marginTop: 15,
      backgroundColor: "#ff6816",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
})