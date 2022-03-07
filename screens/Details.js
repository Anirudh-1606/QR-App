import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { FontAwesome } from "@expo/vector-icons";

export default function Details({ route, navigation }) {
  const { imgLoc, name, price, description } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imgLoc }} style={styles.DetailImg} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Text style={{ fontFamily: "poppins-bold", fontSize: 21 }}>{name}</Text>
        <View>
          <View style={styles.iconFlex}>
            <FontAwesome name="minus-square-o" size={24} color="black" />
            <View style={globalStyles.iconDiv}>
              <Text>0</Text>
            </View>
            <FontAwesome name="plus-square-o" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.textCon}>
        <Text style={{ fontFamily: "poppins-semibold", fontSize: 20 }}>
          Price: {price}/-
        </Text>
        <Text style={{ fontFamily: "poppins-semibold", fontSize: 18 }}>
          Description:
        </Text>
        <Text style={{ fontFamily: "poppins-regular", fontSize: 16 }}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  DetailImg: {
    width: "100%",
    height: "65%",
  },
  iconFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCon: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
