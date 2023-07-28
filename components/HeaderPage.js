import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { useNavigation } from "@react-navigation/native";

export default function HeaderPage() {
  // variable for useNavigation
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Home")}
        >
          <FontAwesomeIcon icon={faHouse} size={20} />
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
  Button: {
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
