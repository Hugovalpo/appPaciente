import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
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
     
    const NumGenre = data.entry[0].resource.extension[1].valueCode;
    switch (NumGenre) {
          case 1 :
             setGenero('Masculino');
             break;
          case 2 :
             setGenero('Femenino');
             break ;
          case 4 : 
          setGenero('Transgenero masculino');
            break;
          case 5 :
            setGenero('Transgenero femenina');
            break;
          case 6 : 
            setGenero ('No binarie');
            break;
          case 7:
            setGenero ('Otra');
            break;
          case 8 : 
              setGenero('No revelado');
              break;
          default:
              setGenero('');
    }
     

    setNombres(data.entry[0].resource.name[0].given[0]);
    setApellidos(data.entry[0].resource.name[0].family);
    setNombreSocial(data.entry[0].resource.name[0].given[0]);
    setRut(data.entry[0].resource.identifier[0].value);
    //setGenero(data.entry[0].resource.extension[1].valueCode);
    setCesfam(data.entry[0].resource.extension)
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
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text title="Actualizar datos"  />
        </TouchableOpacity>
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
  button: {
    marginTop: 10,
    backgroundColor: "#CFA12B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
});
