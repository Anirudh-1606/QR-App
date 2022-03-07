import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export default function MenuInfo() {
  const [color, setColor] = useState("black");

  return (
    <View style={styles.infoComp}>
      <Text style={globalStyles.tableSize}>Table No: 2</Text>
      <TouchableOpacity
        style={styles.waiterComp}
        onPress={() => {
          if (color == "red") {
            setColor("black");
          } else {
            setColor("red");
            console.log("Table 2 requires assistance");
          }
        }}
      >
        <FontAwesome name="bell-o" size={24} color={color} />
        <Text style={globalStyles.waiterBell}>Call Waiter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  infoComp: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: "5%",
    alignItems: "center",
  },
  waiterComp: {
    flexDirection: "row",
    alignItems: "center",
  },
});
