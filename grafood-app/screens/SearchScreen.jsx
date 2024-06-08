import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import LoadingScreen from "./LoadingScreen";

function SearchScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>
      <Text>Main Page!</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Restaurant");
        }}
      >
        <Text>GO_TO_RESTAURANT</Text>
      </Pressable>
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
});
