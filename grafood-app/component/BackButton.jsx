import { Pressable, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BackButton({ label, link, navigation }) {
  return (
    <Pressable
      style={styles.backButton}
      onPress={() => {
        navigation.navigate(link);
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
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
});