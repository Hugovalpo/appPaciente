import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPerson,faXmark,faPhoneFlip, faVials, faUserDoctor, faXRay ,faCapsules, faIdCard, faHospitalUser, faBell } from "@fortawesome/free-solid-svg-icons";

export default function Homescreen() {
  const handleLogout = () => {
    alert("Cerrando sesión...");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <FontAwesomeIcon icon={faXmark} size={20} />
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactContainer}>
        <FontAwesomeIcon icon={faPhoneFlip} size={30} />
        <View style={styles.contact}>
          <Text>Centro de contacto : </Text>
          <Text>+562 26121600 - +562 28693300 </Text>
        </View>
        <FontAwesomeIcon icon={faBell} size={30} />
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../assets/HospEloisaDiaz.png")}
        />
      </View>
      {/* Body */}
      <View style={styles.buttonData}>
      <FontAwesomeIcon icon={faPerson} size={40} />
            <Text style={styles.NameData}>Juan Perez</Text>
            <View style={styles.ContainerMyData}>
            <Text style={styles.NameData}>Ir a</Text>
            <TouchableOpacity >
            <Text style={styles.buttonText}>Mis Datos</Text>
          </TouchableOpacity>
            </View>      
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon icon={faHospitalUser} size={40} />
            <Text style={styles.buttonText}>Mis Atenciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon icon={faVials} size={40} />
            <Text style={styles.buttonText}>Mis Examenes de Laboratorio</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon icon={faUserDoctor} size={40} />
            <Text style={styles.buttonText}>Mis Interconsultas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon icon={faXRay} size={40} />
            <Text style={styles.buttonText}>Mis Examenes de Imagenologia</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon icon={faCapsules} size={40} />
            <Text style={styles.buttonText}>Mis Recetas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon icon={faIdCard} size={40} />
            <Text style={styles.buttonText}>Mis Solicitudes Ciudadanas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  header: {
    padding: 20,
    alignItems: "flex-end",
    backgroundColor: "#1F9602",
  },
  logoutButton: {
    flexDirection:'row',
    marginTop:10,
    width: 130,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CFA12B",
    borderRadius: 20,
  },
  logoutButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  },
  ContainerMyData:{
    flexDirection: 'row'
  },
  contactContainer: {
    flexDirection: "row",
    margin:10
  },
  contact: {
    marginLeft: 10,
    marginRight:50
  },
  imgContainer: {
    backgroundColor: "white",
    marginBottom: 5,
    alignItems:'center',
  },
  image: {
    height: 67,
    width: 164,
    margin: 5,
  },
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
  buttonData:{
    height: 95,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6E6E6",
    marginBottom:20
  }
});
