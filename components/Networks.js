import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Linking } from "react-native";

export default function Networks() {
  const openURL = (buttonType) => {
    let url;

    switch (buttonType) {
      case "instagram":
        url = "https://www.instagram.com";
        break;
      case "whatsapp":
        url = "https://www.ejemplo.com/enlace2";
        break;
      case "facebook":
        url = "https://www.facebook.com";
        break;
      case "twitter":
        url = "https://www.twitter.com";
        break;
      case "linkedin":
        url = "https://www.linkedin.com";
        break;
      case "youtube":
        url = "https://www.youtube.com";
        break;
      default:
        alert("No se puede abrir la url");
        return;
    }
    Linking.openURL(url);
  };

  return (
    <>
      <View style={styles.containerNetWorks}>
        <TouchableOpacity onPress={() => openURL("instagram")}>
          <FontAwesomeIcon icon={faInstagram} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL("whatsapp")}>
          <FontAwesomeIcon icon={faWhatsapp} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL("facebook")}>
          <FontAwesomeIcon icon={faFacebook} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL("twitter")}>
          <FontAwesomeIcon icon={faTwitter} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL("linkedin")}>
          <FontAwesomeIcon icon={faLinkedin} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL("youtube")}>
          <FontAwesomeIcon icon={faYoutube} size={30} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerNetWorks: {
    flexDirection: "row",
    marginBottom: 20,
  },
});
