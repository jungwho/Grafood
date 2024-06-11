import { Slider } from "@ant-design/react-native";
import { StyleSheet, View, Text } from "react-native";

export default function TasteSlider({ label, taste, setTaste }) {
  return (
    <View style={styles.inputBar}>
      <Text style={{ color: "#666666" }}>{label}</Text>
      <View style={{ width: "70%" }}>
        <Slider
          minimumTrackTintColor="#00a466"
          onAfterChange={(value) => setTaste(value)}
        />
      </View>
      <Text style={{ width: "7%" }}>{Math.round(taste * 100)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 8,
  },
});
