import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Linking } from "react-native";
import { encode } from "base-64";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "@react-native-community/checkbox";

export default function LoginScreen({ navigation }) {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [rut, setRut] = useState(null);

  //// function for token /////////
  const getToken = () => {
    const urlToken = "https://auth-server.igamalab.cl/oauth2/token";
    const credentials = "grupo5:W4A0zQVHXc";
    const encodedCredentials = encode(credentials);

    return fetch(urlToken, {
      method: "POST",
      headers: {
        Authorization: "Basic " + encodedCredentials,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    })
      .then((response) => response.json())
      .then((data) => data.access_token)
      .catch((error) => {
        console.error("Error al obtener el token:", error);
        throw error;
      });
  };

  //// function for get info ///////
  const handleQuery = () => {
    console.log("rut listo ", rut);

    const rut_regex = /^[0-9-]+$/;

    if (rut_regex.test(rut)) {
    getToken()
      .then((token) => {
        const urlData =
          "https://fhir-server.igamalab.cl/fhir/Patient?identifier=" + rut;
        return fetch(urlData, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.total > 0) {
          navigation.navigate("Home");
          console.log("data ready", data.total);
        } else {
          console.log("data ready", data.total);
          console.log(" rut not exist");
          alert("Rut no encontrado");
        }
      })
      .catch((error) => {
        console.error("Error in GET query:", error);
        alert("Problema en el servidor");
      });
     } else {
      console.log("Rut no valid in regex.");
      alert('Rut invalido');
     }
  };

  const handleOpenTerms = async () => {
    const url = "https://www.google.cl";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("No se puede abrir la URL:", url);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../assets/HospEloisaDiaz.png")}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Ingrese su Rut</Text>
        <Text style={styles.inputLabel2}>Sin puntos y con guion</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 666666666-11"
          placeholderTextColor="gray"
          onChangeText={(value) => setRut(value)}
          value={rut}
        />
        <TouchableOpacity
          style={styles.button}
          title="Go to Home"
          disabled={!buttonEnabled} 
          onPress={handleQuery}
        >
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>
      </View>
      {/* <CheckBox
        value={checkBoxValue}
        onValueChange={(newValue) => setCheckBoxValue(newValue)}
      /> */}
       <Text>Aceptas los </Text>
      <TouchableOpacity style={styles.termsCondition} onPress={handleOpenTerms}>
        <Text style={styles.linkText}>terminos y condiciones de uso</Text>
      </TouchableOpacity>
      <View style={styles.contactContainer}>
        <FontAwesomeIcon icon={faPhoneFlip} size={30} />
        <View style={styles.contact}>
          <Text>Centro de contacto : </Text>
          <Text>+562 26121600 - +562 28693300 </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F9602",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    backgroundColor: "#D9D9D9",
    marginTop: 100,
    marginBottom: 40,
  },
  image: {
    height: 140,
    width: 300,
    margin: 5,
  },
  inputContainer: {
    backgroundColor: "#1F9602",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 100,
  },
  inputLabel: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputLabel2: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
    width: 240,
    height: 37,
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#CFA12B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
  termsCondition: {
    flex: 1,
  },
  linkText: {
    textDecorationLine: "underline",
  },
  contactContainer: {
    flex: 1,
    flexDirection: "row",
    right: 50,
  },
  contact: {
    marginLeft: 10,
  },
});
