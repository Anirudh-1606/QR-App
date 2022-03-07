import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ItemList from "./itemList";
import { Transition, Transitioning } from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function ItemCat({ category, index, data }) {
  const ref = React.useRef();
  const [arrow, setArrow] = useState("angle-down");
  const [currIndex, setCurrIndex] = useState(null);

  return (
    <View>
      <TouchableOpacity
        style={styles.catCon}
        onPress={() => {
          setCurrIndex(index == currIndex ? null : index);
          if (arrow == "angle-down") {
            setArrow("angle-up");
          } else {
            setArrow("angle-down");
          }
        }}
      >
        <Text style={styles.itemHead}>{category}</Text>
        <FontAwesome name={arrow} size={24} color="black" />
      </TouchableOpacity>
      <Transitioning.View ref={ref} transition={transition}>
        {index === currIndex && (
          <View>
            {data.map((dish, index) => (
              <ItemList key={index} data={dish} />
            ))}
          </View>
        )}
      </Transitioning.View>
    </View>
  );
}

const styles = StyleSheet.create({
  catCon: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingTop: 25,
  },
  itemHead: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
  },
  conGrow: {
    flexGrow: 1,
  },
});
{
  /* <ItemList style={styles.conGrow} */
}
