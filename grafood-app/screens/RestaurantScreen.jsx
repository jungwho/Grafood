import React from "react";
import { restaurantList } from "../database/restaurantDB";
import {
  Button,
  Pressable,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

export default function RestaurantScreen({ navigation }) {
  const restaurantName = "구스토리아";
  const photos = [
    { id: "1", image: require("../assets/images/restaurantImage/image02.png") },
    { id: "2", image: require("../assets/images/restaurantImage/image02.png") },
    { id: "3", image: require("../assets/images/restaurantImage/image02.png") },
    { id: "4", image: require("../assets/images/restaurantImage/image02.png") },
    // 여기에 더 많은 사진 경로를 추가
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Location', { restaurantName })}
          >
            <Text style={{ color: "white" }}>위치</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('ReviewGraph')}
          >
            <Text style={{ color: "white" }}>통계버튼</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={photos}
        numColumns={2}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.photo} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.photoContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  header: {
    backgroundColor: '#ddd',
    padding: 20,
    alignItems: 'center',
    marginVertical: 40,
    marginBottom: 20,
  },
  restaurantName: {
    color: '#00a466',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 25,
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: '#00a466',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '50%',
    height: 200,
    margin: '0%',
  },
});
