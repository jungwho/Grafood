import { Slider } from "@ant-design/react-native";
import { StyleSheet, View, Text } from "react-native";

export default function TasteSlider({ label, taste, setTaste, disabled }) {
  return (
    <View style={styles.inputBar}>
      <Text>{label}</Text>
      <View style={{ width: "70%" }}>
        <Slider
          minimumTrackTintColor="#00a466"
          onAfterChange={(value) => {
            if (!disabled && setTaste) {
              setTaste(value);
            }
          }}
          value={taste}
          disabled={disabled}
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
