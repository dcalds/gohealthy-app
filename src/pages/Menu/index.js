import React, {useState} from 'react';
import {
    Text ,View, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,TouchableOpacity, TextInput, ScrollView
  } from 'react-native';
import logo from '../../assets/logo.png';

export default function Menu ({ navigation }) {

    const [modalidades, setModalidades] = useState(["Corrida", "Caminhada", "Futebol", "Aeróbico", "Academia"])
    const [destaques, setSestaques] = useState(["Corrida dos Idosos", "Pelada dos Primos do Maiobão","Caminhada da Primeira Idade"])

    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#181818" />
        
        <View style={styles.mainContainer}>

          <Image source={logo} style={{height: 27, width: 150, marginBottom: 10}}/>

          <View style={{height: 170, width: "100%"}}>

            <Text style={{fontSize: 18, color: "white", marginTop: 10, marginLeft: 10, fontWeight: "bold"}}> Confira as novas modalidades </Text>

            <ScrollView horizontal={true}>

              {              
                modalidades.map((element, index) => {
                
                return (<TouchableOpacity key={index} style={{margin: 10,
                                          height: 100, 
                                          width: 100, 
                                          borderRadius: 10, 
                                          backgroundColor: "#545454",
                                          display: "flex",
                                          justifyContent: "flex-end",
                                          alignItems: "center"
                                          }}>
                                                        
                  <Text style={{fontSize: 16,
                                color: "#ff6816",
                                fontWeight: "bold",
                                marginBottom: 10
                                }}>
                  {element}</Text>

                </TouchableOpacity>)
                
                })
              }

            </ScrollView>
            
          </View>

          <View style={{height: 240, width: "100%"}}>

            <Text style={{fontSize: 24, color: "white", fontWeight: "bold", marginLeft: 10}}> Eventos em destaque </Text>

            <ScrollView horizontal={true}>

              {
                destaques.map((element, index) => {return (

                  <TouchableOpacity key={index} style={{margin: 10, 
                                                       height: 185, 
                                                       width: 185, 
                                                       borderRadius: 10, 
                                                       backgroundColor: "#545454",
                                                       display: "flex",
                                                       justifyContent: "flex-end",
                                                       alignItems: "center"
                                                       }}>

                     <Text style={{marginBottom: 10,
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold"
                                }}>
                    {element}</Text>       
                  </TouchableOpacity>

                )})
              }

            </ScrollView>
            
          </View>

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
    }
})