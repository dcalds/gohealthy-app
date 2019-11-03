import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import logoGoHealthy from '../../assets/logo.png';




export default function Menu({ navigation }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUser(novoNome) {
    setUsername(novoNome)
  }

  function handlePass(novaSenha) {
    setPassword(novaSenha)
  }

  return (
    <View style={styles.mainContainer}>

      <Image source={logoGoHealthy} resizeMode="contain" style={styles.logo} />

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        placeholder="Usuário ou Email"
        onChangeText={handleUser}
      />

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
        placeholder="Senha"
        onChangeText={handlePass}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Menu', { username })}>
        <Text style={styles.txtBtn}> Entrar </Text>
      </TouchableOpacity>

      <View style={styles.createAccountLabel}>
        <Text style={styles.createAccountText}> Ainda não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Menu', { username })}>
          <Text style={styles.createAccountButton}> Cadastre-se aqui. </Text>
        </TouchableOpacity>
      </View>

    </View>
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
  logo: {
    marginLeft: 10,
    height: 100,
    width: 290,
    marginBottom: 30,
    marginTop: 50
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
  btn: {
    height: 50,
    width: "85%",
    borderRadius: 4,
    marginTop: 15,
    backgroundColor: "#00A1D7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  txtBtn: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  createAccountLabel: {
    flexDirection: "row",
    marginTop: 15
  },
  createAccountText: {
    fontSize: 14,
    color: "white"
  },
  createAccountButton: {
    fontSize: 14,
    color: "skyblue"
  }
})