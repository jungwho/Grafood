import { Pressable, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BackButton({ label, navigation }) {
  return (
    <Pressable
      style={styles.backButton}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Ionicons name="arrow-back-sharp" size={15} color="#888888" />
      <Text style={{ color: "#888888", marginLeft: 3 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButton: {
    display: "flex",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
