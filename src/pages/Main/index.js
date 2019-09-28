import React from 'react';
import {
    Text, 
    View, 
    Image, 
    StyleSheet, 
    Dimensions, 
    ImageBackground, 
    StatusBar,
    TouchableOpacity, 
    TextInput
  } from 'react-native';
  import logo from '../../assets/logo.png';
  import google from '../../assets/google.png';

export default function Menu ({ navigation }) {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#151C48" />
        
        <View style={styles.mainContainer}>

        <Image source={logo} resizeMode="contain" style={{marginLeft:10, height: 100, width: 290, marginBottom: 30, marginTop:50}}/>

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
            <Text style={{fontSize: 14, color: "white", marginTop: 15}}> Login com conta do Google
              <Image source={google} resizeMode="contain" style={{height: 20, width: 20}}/>
            </Text>
          </TouchableOpacity>

          <Text style={{fontSize: 12, color: "white", marginTop: 5}}> ou </Text>

          <TouchableOpacity>
            <Text style={{fontSize: 14, color: "white", marginTop: 5}}>Cadastre-se  </Text>
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
      backgroundColor: "#151C48"
    },
    input: {
      height: 48,
      width: "85%",
      borderRadius: 4,
      marginTop: 6,
      backgroundColor: "#f2f2f8",
      display: "flex",
      justifyContent: "center"
    },
    btn: {
      height: 50,
      width: "85%",
      borderRadius: 4,
      marginTop: 15,
      backgroundColor: "#00A1D7",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
})