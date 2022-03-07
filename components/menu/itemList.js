import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";
import { OrderContext } from "../../context/OrderContext";
import { FlagContext } from "../../context/OrderFlag";

export default function ItemList(data) {
  const [order, setOrder] = useContext(OrderContext);
  const [flag, setFlag] = useContext(FlagContext);
  const dish = data;
  const [orderItem, setOrderItem] = useState({ name: "", price: "", qty: "" });
  const [qty, setQty] = useState(0);
  const navigation = useNavigation();

  const updateOrderItem = (flag) => {
    if (dish.data.name) {
      setOrderItem(() => ({
        name: dish.data.name,
        price: dish.data.price,
        qty: flag ? qty + 1 : qty - 1,
      }));
      setFlag(true);
      try {
        if (orderItem.name) {
          setOrder([...order, orderItem]);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  // console.log(qty);
  // if (orderItem.name) {
  //   console.log(orderItem);
  // }
  console.log(order);

  return (
    <View style={styles.itemListCon}>
      <Image style={styles.img_size} source={{ uri: dish.data.image }} />
      <View style={{ paddingLeft: 15, width: "45%" }}>
        <Text style={globalStyles.itemHead}>{dish.data.name}</Text>
        <Text style={globalStyles.itemDes}>Price: {dish.data.price}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Details", {
              imgLoc: dish.data.image,
              description: dish.data.description,
              price: dish.data.price,
              name: dish.data.name,
            })
          }
        >
          <Text style={{ color: "#ff2800" }}>What's this?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={globalStyles.iconFlex}>
          <TouchableOpacity>
            <FontAwesome
              name="minus-square-o"
              size={24}
              color="red"
              onPress={() => {
                if (qty > 0) {
                  setQty(qty - 1);
                  updateOrderItem(false);
                }
              }}
            />
          </TouchableOpacity>
          <View style={styles.qtyCon}>
            <Text style={{ fontWeight: "bold", color: "red", fontSize: 16 }}>
              {qty}
            </Text>
          </View>

          <TouchableOpacity>
            <FontAwesome
              name="plus-square-o"
              size={24}
              color="red"
              onPress={() => {
                setQty(qty + 1);
                updateOrderItem(true);
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img_size: {
    height: 80,
    width: 100,
    borderRadius: 15,
  },
  itemListCon: {
    width: "90%",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 15,

    marginRight: "auto",
  },
  qtyCon: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: "#ffcccb",
  },
});
