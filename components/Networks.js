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
        url = "https://www.instagram.com/hospitaldra.eloisadiaz/";
        break;
      case "whatsapp":
        url =
          "https://api.whatsapp.com/send/?phone=56226121600&text&type=phone_number&app_absent=0";
        break;
      case "facebook":
        url = "https://www.facebook.com/Hospital.Dra.EloisaDiaz/";
        break;
      case "twitter":
        url =
          "https://twitter.com/i/flow/login?redirect_after_login=%2FHosp_EloisaDiaz";
        break;
      case "linkedin":
        url =
          "https://www.linkedin.com/company/hospital-eloisadiaz/?viewAsMember=true";
        break;
      case "youtube":
        url =
          "https://www.youtube.com/channel/UCkuRLzb2Tfru2uH7lFqLJLg/featured";
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
