import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { menuList1, menuList2, menuList3 } from "../database/menuDB";
import { Feather } from "@expo/vector-icons";
import { restaurantList } from "../database/restaurantDB";

function SearchScreen({ navigation }) {
  const [menu1, setMenu1] = useState(menuList1[0]);
  const [menu2, setMenu2] = useState(menuList2[0]);
  const [menu3, setMenu3] = useState(menuList3[0]);
  const [recommendMenu, setRecommendMenu] = useState("");

  const randomMenu = () => {
    setMenu1(menuList1[Math.floor(Math.random() * menuList1.length)]);
    setMenu2(menuList2[Math.floor(Math.random() * menuList2.length)]);
    setMenu3(menuList3[Math.floor(Math.random() * menuList3.length)]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.recommendContainer}>
          <Pressable style={styles.refreshButton} onPress={randomMenu}>
            <Text style={{ color: "#ff3232", fontSize: 16, marginRight: 4 }}>
              Recommend
            </Text>
            <Feather name="refresh-ccw" size={18} color="#ff3232" />
          </Pressable>
          <View style={styles.recommendMenu}>
            <Pressable
              onPress={() => {
                setRecommendMenu(menu1);
              }}
            >
              <Text style={styles.menu}>{menu1}</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setRecommendMenu(menu2);
              }}
            >
              <Text style={styles.menu}>{menu2}</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setRecommendMenu(menu3);
              }}
            >
              <Text style={styles.menu}>{menu3}</Text>
            </Pressable>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="먹고 싶은 메뉴를 검색하세요!"
          value={recommendMenu}
          onChangeText={setRecommendMenu}
          returnKeyType="search"
        />
        <View style={styles.orderContainer}>
          <Pressable>
            <Text style={{ color: "#888888" }}>가까운순</Text>
          </Pressable>
          <Pressable>
            <Text style={{ color: "#888888" }}>리뷰많은순</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView style={{ flex: 1, marginTop: 160 }}>
        <Text>Main Page!</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Location");
          }}
        >
          <Text>location</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  topContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
    position: "absolute",
    top: 0,
    backgroundColor: "#efefef",
    zIndex: 1,
  },
  recommendContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },

  refreshButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginVertical: 5,
    borderRadius: 10,
  },

  recommendMenu: {
    display: "flex",
    flexDirection: "row",
    width: "53%",
    justifyContent: "space-between",
  },

  menu: {
    color: "#ff3232",
    fontSize: 16,
  },

  input: {
    width: "100%",
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 7.5,
    fontSize: 16,
  },
  orderContainer: {
    width: "32.5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    marginTop: 5,
    marginBottom: 10,
  },
});
