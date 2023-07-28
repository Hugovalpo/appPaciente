import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { useNavigation } from "@react-navigation/native";

export default function HeaderHome() {
  // variable for useNavigation
  const navigation = useNavigation();

  const handleLogout = () => {
    alert("Cerrando sesión...");
    navigation.navigate("Login");

  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <FontAwesomeIcon icon={faXmark} size={20} />
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: "flex-end",
    backgroundColor: "#1F9602",
  },
  logoutButton: {
    flexDirection: "row",
    marginTop: 10,
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
});
