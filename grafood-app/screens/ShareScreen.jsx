import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { shareList } from "../database/shareDB";
import { useState } from "react";
import TasteSlider from "../component/TasteSlider";

function ShareScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        {shareList.map((el, index) => (
          <View key={index}>
            <View style={styles.listTopContainer}>
              <Text style={{ fontSize: 16, color: "#666666", marginLeft: 5 }}>
                {el.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, marginRight: 7 }}>
                    {el.restaurant}'s
                  </Text>
                  <Text style={{ marginRight: 5 }}>{el.menu}</Text>
                </View>
              </View>
            </View>
            {el.image && (
              <Image source={el.image} style={{ width: "100%", height: 350 }} />
            )}
            <View
              style={{
                position: "absolute",
                top: 80,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(235, 235, 235, 0.6)",
              }}
            >
              <TasteSlider
                label="Spicy"
                taste={el.review[0] / 100}
                disabled={true}
              />
              <TasteSlider
                label="Salty"
                taste={el.review[1] / 100}
                disabled={true}
              />
              <TasteSlider
                label="sweet"
                taste={el.review[2] / 100}
                disabled={true}
              />
              <TasteSlider
                label="Quantity"
                taste={el.review[3] / 100}
                disabled={true}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default ShareScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  listTopContainer: {
    marginVertical: 20,
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
});
