import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { globalStyles } from "../styles/global";
import { FontAwesome } from "@expo/vector-icons";
import ItemCat from "./menu/itemCat";
import SnackBar from "./menu/SnackBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../config/firebase";
import { ScrollView } from "react-native-gesture-handler";
import { FlagContext } from "../context/OrderFlag";

const category = ["Starters", "Curries", "Biriyanis", "Breads", "Icecreams"];

export default function MenuBody({ navigation }) {
  const [flag, setFlag] = useContext(FlagContext);

  const [toggle1, setToggle1] = useState("toggle-off");
  const [toggle2, setToggle2] = useState("toggle-off");
  const [isLoad, setIsLoading] = useState(true);
  const [screen, setScreen] = useState(230);
  const show = true;
  const [starters, setStarters] = useState([]);
  const [biriyanis, setBiriyani] = useState([]);
  const [icecreams, setIcecreams] = useState([]);
  const [breads, setBreads] = useState([]);

  const db = firebase.firestore();
  const docref = db.collection("menu");

  useEffect(() => {
    const start = [];
    const bread = [];
    const iceCream = [];
    const biriyani = [];
    const fetchMenu = async () => {
      await docref
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs.map((doc) => {
            var items = doc.data();
            var modules = Object.values(items);

            for (let item in modules) {
              if (modules[item].course == "starters") {
                // setStarters([...starters, modules[item]]);
                start.push(modules[item]);
              } else if (modules[item].course == "biriyani") {
                // setBiriyani([...biriyanis, modules[item]]);
                biriyani.push(modules[item]);
              } else if (modules[item].course == "icecream") {
                // setIcecreams([...icecreams, modules[item]]);
                iceCream.push(modules[item]);
              } else if (modules[item].course == "breads") {
                // setBreads([...breads, modules[item]]);
                bread.push(modules[item]);
              }
            }
            setStarters(start);
            setBiriyani(biriyani);
            setIcecreams(iceCream);
            setBreads(bread);
            setIsLoading(false);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // console.log(starters);
    fetchMenu(); //CALLING FUNCTION
  }, []);

  let screenHeight = Dimensions.get("window").height;
  return (
    <View>
      <Text style={styles.body_head}>Here's the best food Today!</Text>

      <View style={styles.cat_row}>
        <View style={styles.cat_pad}>
          <TouchableOpacity
            style={styles.rowCat}
            onPress={() => {
              if (toggle1 == "toggle-on") {
                setToggle1("toggle-off");
              } else {
                setToggle1("toggle-on");
              }
            }}
          >
            <FontAwesome name={toggle1} size={24} color="black" />
            <Text style={styles.cat_mg}>Veg</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cat_pad}>
          <TouchableOpacity
            style={styles.rowCat}
            onPress={() => {
              if (toggle2 == "toggle-on") {
                setToggle2("toggle-off");
              } else {
                setToggle2("toggle-on");
              }
            }}
          >
            <FontAwesome name={toggle2} size={24} color="black" />
            <Text style={styles.cat_mg}>Non-Veg</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: screenHeight - screen,
          paddingBottom: 15,
          paddingTop: 15,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <ItemCat category={"Starters"} data={starters} index={1} />
          <ItemCat category={"Breads"} data={breads} index={2} />
          <ItemCat category={"Biriyani"} data={biriyanis} index={3} />
          <ItemCat category={"IceCreams"} data={icecreams} index={4} />
        </ScrollView>
      </View>

      <View>{flag && <SnackBar />}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowCat: {
    flexDirection: "row",
    alignItems: "center",
  },
  cat_mg: {
    marginLeft: 5,
    fontFamily: "poppins-regular",
    fontSize: 16,
  },
  cat_row: {
    flexDirection: "row",
    marginTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  cat_pad: {
    paddingLeft: 10,
  },
  body_head: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
    marginTop: 8,
  },
});
