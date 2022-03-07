import * as Font from "expo-font";
import React, { useState } from "react";
import Menu from "./screens/Menu";
import Details from "./screens/Details";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Total from "./screens/Total";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);
const getFonts = () => {
  return Font.loadAsync({
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
  });
};
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Menu Screen"
            component={Menu}
            options={{
              title: "Restaurant",
              headerStyle: {
                backgroundColor: "#D13434",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerBackTitleStyle: {
                fontFamily: "poppins-bold",
              },
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: "Details",
              headerStyle: {
                backgroundColor: "#D13434",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerBackTitleStyle: {
                fontFamily: "poppins-bold",
              },
            }}
          />

          <Stack.Screen
            name="Total"
            component={Total}
            options={{
              title: "Order Summary",
              headerStyle: {
                backgroundColor: "#D13434",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerBackTitleStyle: {
                fontFamily: "poppins-bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}
