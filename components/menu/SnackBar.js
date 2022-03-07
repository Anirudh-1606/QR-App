import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";
import { OrderContext } from "../../context/OrderContext";

export default function SnackBar() {
  const [order, setOrder] = useContext(OrderContext);
  const navigation = useNavigation();
  console.log("snack Bar =>", order);
  return (
    <View style={styles.snackContainer}>
      <View style={styles.snackBar}>
        <View>
          <Text style={styles.snackBarText}>Total : 1235/-</Text>
          <Text style={styles.snackBarText}>Taxes will be extra</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Total", order);
            }}
          >
            <Text
              style={{
                fontFamily: "poppins-bold",
                color: "white",
                fontSize: 20,

                paddingLeft: "10%",
              }}
            >
              Order Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  snackContainer: {
    position: "absolute",
    width: "100%",
    margin: -19,
    // marginBottom: -20,
    // marginLeft: -13,
    bottom: 0,
  },
  snackBar: {
    padding: 20,

    flexDirection: "row",
    backgroundColor: "black",
    minWidth: "82%",
    maxHeight: 80,
    justifyContent: "space-between",
    borderRadius: 8,
  },
  snackBarText: {
    fontFamily: "poppins-semibold",
    fontSize: 16,
    color: "white",
  },
});
