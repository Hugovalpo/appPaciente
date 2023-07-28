import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MisDatosScreen from "./screens/MisDatosScreen";
import MisAtenctionesScreen from "./screens/MisAtenctionesScreen";
import MisExamenesLabScreen from "./screens/MisExamenesLabScreen";
import MisExamenesImgScreen from "./screens/MisExamenesImgScreen";
import MisRecetasScreen from "./screens/MisRecetasScreen";
import MisSolicitudesScreen from "./screens/MisSolicitudesScreen";
import MisConsultasScreen from "./screens/MisConsultasScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MisDatos" component={MisDatosScreen} />
        <Stack.Screen name="MisAtenciones" component={MisAtenctionesScreen} />
        <Stack.Screen name="MisExamenesLab" component={MisExamenesLabScreen} />
        <Stack.Screen name="MisConsultas" component={MisConsultasScreen} />
        <Stack.Screen name="MisExamenesImg" component={MisExamenesImgScreen} />
        <Stack.Screen name="MisRecetas" component={MisRecetasScreen} />
        <Stack.Screen name="MisSolicitudes" component={MisSolicitudesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
