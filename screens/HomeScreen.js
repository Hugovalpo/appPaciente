import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPerson,
  faPhoneFlip,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import ButtonsHome from "../components/ButtonsHome";
import HeaderHome from "../components/HeaderHome";

export default function Homescreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderHome />
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
          <TouchableOpacity>
            <Text style={styles.buttonText}>Mis Datos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ButtonsHome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  ContainerMyData: {
    flexDirection: "row",
  },
  contactContainer: {
    flexDirection: "row",
    margin: 10,
  },
  contact: {
    marginLeft: 10,
    marginRight: 50,
  },
  imgContainer: {
    backgroundColor: "white",
    marginBottom: 5,
    alignItems: "center",
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
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonData: {
    height: 95,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6E6E6",
    marginBottom: 20,
  },
});
