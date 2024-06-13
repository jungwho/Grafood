import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { menuList1, menuList2, menuList3 } from "../database/menuDB";
import { Feather } from "@expo/vector-icons";
import { restaurantList } from "../database/restaurantDB";
import LoadingScreen from "./LoadingScreen";

function SearchScreen({ navigation }) {
  const [menu1, setMenu1] = useState(menuList1[0]);
  const [menu2, setMenu2] = useState(menuList2[0]);
  const [menu3, setMenu3] = useState(menuList3[0]);
  const [recommendMenu, setRecommendMenu] = useState("");
  const [sortType, setSortType] = useState("distance");
  const [focused, setFocused] = useState(true);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultList = [...restaurantList].sort(
    (a, b) => a.distance - b.distance
  );
  const [newList, setNewList] = useState(defaultList);

  useEffect(() => {
    let sortedList = [...restaurantList];
    if (sortType === "distance") {
      sortedList = sortedList.sort((a, b) => a.distance - b.distance);
    } else if (sortType === "review") {
      sortedList = sortedList.sort((a, b) => b.review - a.review);
    }
    setNewList(sortedList);
  }, [sortType]);

  const sortListByDistance = () => {
    setSortType("distance");
    setFocused(true);
  };

  const sortListByReview = () => {
    setSortType("review");
    setFocused(false);
  };

  const randomMenu = () => {
    setMenu1(menuList1[Math.floor(Math.random() * menuList1.length)]);
    setMenu2(menuList2[Math.floor(Math.random() * menuList2.length)]);
    setMenu3(menuList3[Math.floor(Math.random() * menuList3.length)]);
  };

  const searchPress = () => {
    if (recommendMenu === "") {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearch(true);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.recommendContainer}>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1 },
              styles.refreshButton,
            ]}
            onPress={randomMenu}
          >
            <Text style={{ color: "#ff3232", fontSize: 16, marginRight: 4 }}>
              Recommend
            </Text>
            <Feather name="refresh-ccw" size={18} color="#ff3232" />
          </Pressable>
          <View style={styles.recommendMenu}>
            <Pressable
              onPress={() => setRecommendMenu(menu1)}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}
            >
              <Text style={styles.menu}>{menu1}</Text>
            </Pressable>
            <Pressable
              onPress={() => setRecommendMenu(menu2)}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}
            >
              <Text style={styles.menu}>{menu2}</Text>
            </Pressable>
            <Pressable
              onPress={() => setRecommendMenu(menu3)}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}
            >
              <Text style={styles.menu}>{menu3}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.recommendContainer}>
          <TextInput
            style={styles.input}
            placeholder="먹고 싶은 메뉴를 검색하세요!"
            value={recommendMenu}
            onChange={() => {
              setSearch(false);
            }}
            onChangeText={setRecommendMenu}
            returnKeyType="done"
          />
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1 },
              { padding: 7.5, borderRadius: 10, backgroundColor: "#ff3232" },
            ]}
            onPress={searchPress}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Search</Text>
          </Pressable>
        </View>
        <View style={styles.orderContainer}>
          <Pressable onPress={sortListByDistance}>
            <Text style={focused ? { color: "#666666" } : { color: "#a0a0a0" }}>
              가까운순
            </Text>
          </Pressable>
          <Pressable onPress={sortListByReview}>
            <Text
              style={!focused ? { color: "#666666" } : { color: "#a0a0a0" }}
            >
              리뷰많은순
            </Text>
          </Pressable>
        </View>
      </View>

      {loading && (
        <View style={{ flex: 1, marginTop: 160 }}>
          <LoadingScreen />
        </View>
      )}

      {!loading && search && (
        <ScrollView style={{ flex: 1, marginTop: 155, width: "100%" }}>
          {newList.map((el, index) =>
            recommendMenu === el.menu ? (
              <Pressable
                key={index}
                onPress={() => {
                  navigation.navigate("Restaurant", { id: el.id });
                }}
              >
                <View style={styles.listTopContainer}>
                  <Text style={{ fontSize: 16, color: "#666666" }}>
                    {el.name}
                  </Text>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ color: "#888888" }}>
                      도보 {el.distance}분
                    </Text>
                    <Text style={{ marginLeft: 10, color: "#888888" }}>
                      리뷰 {el.review}개
                    </Text>
                  </View>
                </View>
                {el.image && (
                  <Image
                    source={el.image}
                    style={{ width: "100%", height: 350 }}
                  />
                )}
              </Pressable>
            ) : null
          )}
          {newList.every((el) => el.menu !== recommendMenu) && (
            <Text
              style={{
                fontSize: 16,
                color: "#666666",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              레스토랑이 존재하지 않습니다.
            </Text>
          )}
        </ScrollView>
      )}
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
    paddingTop: 55,
    position: "absolute",
    top: 0,
    backgroundColor: "#efefef",
    zIndex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  recommendMenu: {
    display: "flex",
    flexDirection: "row",
    width: "54%",
    paddingRight: 5,
    justifyContent: "space-between",
  },
  menu: {
    color: "#ff3232",
    fontSize: 16,
  },
  input: {
    width: "80%",
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 7.5,
    fontSize: 16,
    color: "#666666",
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
  listTopContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 18,
  },
});
