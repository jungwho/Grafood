import { Pressable, Text, View, StyleSheet, FlatList, Image } from "react-native";

export default function RestaurantScreen({ navigation }) {
  const restaurantName = "구공탄곱창 본점";
  const walkTime = 3; // 도보 시간 (예: 3분)
  const reviewCount = 198; // 리뷰 수 (예: 198)

  const photos = [
    { id: '1', src: require('Grafood/grafood-app/assets/images/image1.png') },
    { id: '2', src: require('Grafood/grafood-app/assets/images/image1.png') },
    { id: '3', src: require('Grafood/grafood-app/assets/images/image1.png') },
    { id: '4', src: require('Grafood/grafood-app/assets/images/image1.png') },
    { id: '5', src: require('Grafood/grafood-app/assets/images/image1.png') },
    { id: '6', src: require('Grafood/grafood-app/assets/images/image1.png') }
    // 여기에 더 많은 사진 경로를 추가
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
          <Pressable onPress={() => navigation.navigate("LocationScreen")}>
            <Text style={styles.button}>Location</Text>
          </Pressable>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.info}>{`${walkTime}분`}</Text>
          <Text style={styles.info}>{`리뷰 ${reviewCount}`}</Text>
          <Pressable onPress={() => navigation.navigate("ReviewGraphScreen")}>
            <Text style={styles.button}>Review</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={photos}
        numColumns={2}
        renderItem={({ item }) => (
          <Image source={item.src} style={styles.photo} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.photoContainer}
      />
      <View style={styles.navigationButtons}>
        <Pressable
          onPress={() => {
            navigation.navigate("Location");
          }}
        >
          <Text>GO_TO_LOCATION</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("ReviewGraph");
          }}
        >
          <Text>GO_TO_REVIEW_GRAPH</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  headerLeft: {
    justifyContent: "center",
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    color: "blue",
    marginTop: 5,
  },
  headerRight: {
    alignItems: "flex-end",
  },
  info: {
    fontSize: 16,
  },
  photoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: '48%',
    height: 150,
    margin: '1%',
  },
  navigationButtons: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
