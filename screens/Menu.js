import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";
import MenuInfo from "../components/menuInfo";
import MenuBody from "../components/menuBody";
import { OrderProvider } from "../context/OrderContext";
import { FlagProvider } from "../context/OrderFlag";

export default function Menu({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <MenuInfo />
      <FlagProvider>
        <OrderProvider>
          <MenuBody />
        </OrderProvider>
      </FlagProvider>
    </View>
  );
}
