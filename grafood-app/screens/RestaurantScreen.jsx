import { Pressable, Text, View, StyleSheet } from "react-native";

export default function RestaurantScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* 서연코드작성 onpress 안에 함수는 건들지 말기! */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
