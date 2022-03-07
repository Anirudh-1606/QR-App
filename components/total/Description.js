import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { OrderContext } from "../../context/OrderContext";
export default function Description() {
  const [order, setOrder] = useContext(OrderContext);
  console.log("from descrip =>", order);
  useEffect(() => {
    console.log(order);
  }, [order]);
  return (
    <View>
      <Text>HELLO</Text>
      {order.map((item) => {
        <Text>{item.name}</Text>;
      })}
    </View>
  );
}
