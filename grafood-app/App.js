import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";

import SearchScreen from "./screens/SearchScreen";
import ShareScreen from "./screens/ShareScreen";
import MyPageScreen from "./screens/MyPageScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => {
              if (route.name === "Search") {
                return (
                  <AntDesign
                    name={"enviroment"}
                    size={size}
                    color={focused ? "#FF3232" : "gray"}
                  />
                );
              } else if (route.name === "Share") {
                return (
                  <MaterialIcons
                    name={"feed"}
                    size={size}
                    color={focused ? "#D1D1D1" : "gray"}
                  />
                );
              } else if (route.name === "MyPage") {
                return (
                  <FontAwesome
                    name={"user"}
                    size={size}
                    color={focused ? "#00A466" : "gray"}
                  />
                );
              }
            },

            headerShown: false,
          })}
        >
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarLabel: "Search",
              tabBarActiveTintColor: "#FF3232",
            }}
          />
          <Tab.Screen
            name="Share"
            component={ShareScreen}
            options={{
              tabBarLabel: "Share",
              tabBarActiveTintColor: "#D1D1D1",
            }}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPageScreen}
            options={{
              tabBarLabel: "My Page",
              tabBarActiveTintColor: "#00A466",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
