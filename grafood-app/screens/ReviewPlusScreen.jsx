import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Entypo from "@expo/vector-icons/Entypo";
import BackButton from "../component/BackButton";
import TasteSlider from "../component/TasteSlider";
import * as FileSystem from "expo-file-system";

function ReviewPlusScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [menu, setMenu] = useState("");
  const [spicy, setSpicy] = useState(0);
  const [salty, setSalty] = useState(0);
  const [sweet, setSweet] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const reviewObj = {
    name,
    menu,
    image,
    spicy,
    salty,
    sweet,
    quantity,
    image,
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveImage = async (imageUri) => {
    const fileName = imageUri.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.copyAsync({
        from: imageUri,
        to: newPath,
      });
      console.log("이미지가 저장되었습니다.");
    } catch (error) {
      console.error("이미지 저장 중 에러:", error);
    }
  };

  const uploadReview = () => {
    saveImage(image);
    navigation.navigate("MyPage", { reviews: reviewObj });
  };
  return (
    <View style={styles.container}>
      <BackButton label="My Page" navigation={navigation} />
      <View
        style={[
          styles.section,
          {
            flexDirection: "row",
            justifyContent: "flex-end",
          },
        ]}
      >
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1 },
            {backgroundColor: "#00a466",
            paddingVertical: 5,
            paddingHorizontal: 30,
            borderRadius: 7},
          ]}
          onPress={uploadReview}
        >
          <Text style={{ color: "white" }}>Upload</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Select Restaurant</Text>
        <TextInput
          style={[styles.input, { padding: 7.5 }]}
          onChangeText={setName}
          value={name}
          returnKeyType="done"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Select Menu</Text>
        <TextInput
          style={[styles.input, { padding: 7.5 }]}
          onChangeText={setMenu}
          value={menu}
          returnKeyType="done"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Add Photo</Text>
        <Pressable
          style={[styles.input, styles.inputImage]}
          onPress={pickImage}
        >
          {!image ? (
            <Pressable onPress={pickImage}>
              <Entypo name="circle-with-plus" size={40} color="#efefef" />
            </Pressable>
          ) : (
            <View>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          )}
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Write Your Review</Text>
        <View style={[styles.input, { paddingVertical: 20 }]}>
          <TasteSlider label="Spicy" taste={spicy} setTaste={setSpicy} />
          <TasteSlider label="Salty" taste={salty} setTaste={setSalty} />
          <TasteSlider label="Sweet" taste={sweet} setTaste={setSweet} />
          <TasteSlider
            label="Quantity"
            taste={quantity}
            setTaste={setQuantity}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  section: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 2,
  },
  title: {
    color: "#00a466",
    fontSize: 15,
    paddingLeft: 2.5,
  },
  input: {
    width: "100%",
    marginVertical: 3,
    backgroundColor: "white",
    borderRadius: 10,
  },
  inputImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  image: {
    width: 180,
    height: 180,
  },
});
export default ReviewPlusScreen;
