import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OrderProvider } from "../context/OrderContext";
import Description from "../components/total/Description";

export default function Total({ route }) {
  const order = route.params;
  console.log("order from total =>", order);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.summaryHead}>Your order is:</Text>
      </View>
      <OrderProvider>
        <Description />
      </OrderProvider>
      <View>
        {order.map((item, index) => {
          <Text key={index}>{item.name}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  summaryHead: {
    fontFamily: "poppins-bold",
    fontSize: 21,
  },
});
