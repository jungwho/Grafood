import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import Entypo from "@expo/vector-icons/Entypo";
import TasteSlider from "../component/TasteSlider";

function MyPageScreen({ navigation, route }) {
  const [reviewList, setReviewList] = useState([]);
  const [nickName, setNickName] = useState("nickname");
  const [isEdit, setIsEdit] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    if (route.params && route.params.reviews) {
      const newReview = route.params.reviews;
      setReviewList((prevList) => [...prevList, newReview]);
    }
  }, [route.params]);

  const pickProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={pickProfileImage}>
              {!profileImage ? (
                <Pressable
                  onPress={pickProfileImage}
                  style={styles.profileImage}
                >
                  <Entypo name="circle-with-plus" size={40} color="white" />
                </Pressable>
              ) : (
                <View>
                  <Image
                    source={{ uri: profileImage }}
                    style={styles.profileImage}
                  />
                </View>
              )}
            </Pressable>

            {isEdit ? (
              <TextInput
                style={{ marginLeft: 10, fontSize: 20 }}
                value={nickName}
                onChangeText={(text) => setNickName(text)}
                autoFocus
              />
            ) : (
              <Text style={{ marginLeft: 10, fontSize: 20 }}>{nickName}</Text>
            )}
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 5, fontSize: 15, color: "#666666" }}>
              review
            </Text>
            <Text style={{ fontSize: 16, marginRight: 5 }}>
              {reviewList.length}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {isEdit ? (
            <Pressable
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                styles.button,
              ]}
              onPress={() => {
                setIsEdit(false);
              }}
            >
              <Text style={{ color: "#00a466" }}>Check</Text>
            </Pressable>
          ) : (
            <Pressable
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                styles.button,
              ]}
              onPress={() => {
                setIsEdit(true);
              }}
            >
              <Text style={{ color: "#00a466" }}>Edit Profile</Text>
            </Pressable>
          )}

          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1 },
              styles.button,
            ]}
            onPress={() => {
              navigation.navigate("ReviewPlus");
            }}
          >
            <Text style={{ color: "#00a466" }}>Add Review</Text>
          </Pressable>
        </View>
      </View>

      {selectedReview && (
        <View style={styles.modal}>
          <View style={styles.modalTitle}>
            <Text style={{ fontSize: 20 }}>{selectedReview.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>메뉴 </Text>
              <Text style={{ color: "#00a466" }}>{selectedReview.menu}</Text>
            </View>
          </View>
          <TasteSlider
            label="Spicy"
            taste={selectedReview.spicy}
            disabled={true}
          />
          <TasteSlider
            label="Salty"
            taste={selectedReview.salty}
            disabled={true}
          />
          <TasteSlider
            label="sweet"
            taste={selectedReview.sweet}
            disabled={true}
          />
          <TasteSlider
            label="Quantity"
            taste={selectedReview.quantity}
            disabled={true}
          />
          <View
            style={{
              padding: 25,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Pressable
              onPress={() => {
                setSelectedReview(null);
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
                {
                  backgroundColor: "#00a466",
                  width: "30%",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 3,
                },
              ]}
            >
              <Text style={{ color: "white" }}>close</Text>
            </Pressable>
          </View>
        </View>
      )}

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {reviewList.map((el, index) => (
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
                { width: "33.3%" },
              ]}
              key={index}
              onPress={() => {
                setSelectedReview(el);
              }}
            >
              <Image
                source={{ uri: el.image }}
                style={[
                  styles.image,
                  selectedReview === el && styles.translucentImage,
                ]}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default MyPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    paddingTop: 60,
    paddingHorizontal: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modal: {
    position: "absolute",
    top: 220,
    width: "90%",
    margin: "5%",
    zIndex: 1,
    backgroundColor: "rgba(235, 235, 235, 0.7)",
    borderRadius: 10,
  },
  modalTitle: {
    width: "90%",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 40,
    justifyContent: "space-between",
  },

  buttonContainer: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  button: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#efefef",
    width: "49%",
    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: "#efefef",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 125,
  },
  translucentImage: {
    opacity: 0.5,
  },
});
