import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faVials, faUserDoctor, faXRay ,faCapsules, faIdCard, faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import React from 'react'

import { useNavigation } from "@react-navigation/native";


export default function ButtonsHome() {

// variable for useNavigation
const navigation = useNavigation();    

  return (
    <>
      <View style={styles.body}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MisAtenciones")}>
          <FontAwesomeIcon icon={faHospitalUser} size={40} />
            <Text style={styles.buttonText} >Mis Atenciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MisExamenesLab")}>
          <FontAwesomeIcon icon={faVials} size={40} />
            <Text style={styles.buttonText}>Mis Examenes de Laboratorio</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MisConsultas")}>
          <FontAwesomeIcon icon={faUserDoctor} size={40} />
            <Text style={styles.buttonText}>Mis Interconsultas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MisExamenesImg")}>
          <FontAwesomeIcon icon={faXRay} size={40} />
            <Text style={styles.buttonText}>Mis Examenes de Imagenologia</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MisRecetas")}>
          <FontAwesomeIcon icon={faCapsules} size={40} />
            <Text style={styles.buttonText}>Mis Recetas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MisSolicitudes")}>
          <FontAwesomeIcon icon={faIdCard} size={40} />
            <Text style={styles.buttonText}>Mis Solicitudes Ciudadanas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    body: {
        justifyContent: "center",
        alignItems: "center",
      },
      row: {
        flexDirection: "row",
        marginBottom: 20,
      },
      button: {
        width: 118,
        height: 118,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        marginHorizontal: 10,
        borderRadius:20
      },
      buttonText: {
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
      },
})