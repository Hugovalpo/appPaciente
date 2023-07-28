import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import HeaderPage from "../components/HeaderPage";
import React, { useEffect, useState, useContext } from "react";
import { MyDataContext } from "../context/MyDatacontext";

export default function MisDatosScreen() {
  const { data } = useContext(MyDataContext);
  //const { dataShow } = route.params;

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [nombreSocial, setNombreSocial] = useState("");
  const [rut, setRut] = useState("");
  const [genero, setGenero] = useState("");
  const [cesfam, setCesfam] = useState("");
  const [telefonos, setTelefonos] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");

  useEffect(() => {
    setNombres(data.entry[0].resource.name[0].given[0]);
    setApellidos(data.entry[0].resource.name[0].family);
    setNombreSocial(data.entry[0].resource.name[0].given[0]);
    setRut();
  }, []);

  // const lastname = data.entry[0].resource.name[0].family;
  // const name = data.entry[0].resource.name[0].given[0];

  const handleSubmit = () => {};

  return (
    <>
      <HeaderPage />
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Nombres:</Text>
        <TextInput
          style={styles.input}
          value={nombres}
          onChangeText={setNombres}
          placeholder="Ingrese sus nombres"
        />

        <Text style={styles.label}>Apellidos:</Text>
        <TextInput
          style={styles.input}
          value={apellidos}
          onChangeText={setApellidos}
          placeholder="Ingrese sus apellidos"
        />

        <Text style={styles.label}>Nombre Social:</Text>
        <TextInput
          style={styles.input}
          value={nombreSocial}
          onChangeText={setNombreSocial}
          placeholder="Ingrese su nombre social"
        />

        <Text style={styles.label}>RUT:</Text>
        <TextInput
          style={styles.input}
          value={rut}
          onChangeText={setRut}
          placeholder="Ingrese su RUT"
        />

        <Text style={styles.label}>Género:</Text>
        <TextInput
          style={styles.input}
          value={genero}
          onChangeText={setGenero}
          placeholder="Ingrese su género"
        />
        <Text style={styles.label}>CESFAM:</Text>
        <TextInput
          style={styles.input}
          value={cesfam}
          onChangeText={setCesfam}
          placeholder="Ingrese su CESFAM"
        />
        <Text style={styles.label}>Teléfonos:</Text>
        <TextInput
          style={styles.input}
          value={telefonos}
          onChangeText={setTelefonos}
          placeholder="Ingrese sus teléfonos"
        />
        <Text style={styles.label}>Correo:</Text>
        <TextInput
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
          placeholder="Ingrese su correo electrónico"
        />
        <Text style={styles.label}>Dirección:</Text>
        <TextInput
          style={styles.input}
          value={direccion}
          onChangeText={setDireccion}
          placeholder="Ingrese su dirección"
        />
        <View style={styles.buttonView}>
          <Button title="Enviar" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonView: {
    marginBottom: 30,
  },
});
