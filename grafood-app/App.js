import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";

import SearchStackNavigator from "./screens/navigator/SearchStackNavigator";
import ShareStackNavigator from "./screens/navigator/ShareStackNavigator";
import MyPageStackNavigator from "./screens/navigator/MyPageStackNavigator";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => {
              if (route.name === "tab1") {
                return (
                  <AntDesign
                    name={"enviroment"}
                    size={size}
                    color={focused ? "#FF3232" : "gray"}
                  />
                );
              } else if (route.name === "tab2") {
                return (
                  <MaterialIcons
                    name={"feed"}
                    size={size}
                    color={focused ? "#D1D1D1" : "gray"}
                  />
                );
              } else if (route.name === "tab3") {
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
            name="tab1"
            component={SearchStackNavigator}
            options={{
              tabBarLabel: "Search",
              tabBarActiveTintColor: "#FF3232",
            }}
          />
          <Tab.Screen
            name="tab2"
            component={ShareStackNavigator}
            options={{
              tabBarLabel: "Share",
              tabBarActiveTintColor: "#D1D1D1",
            }}
          />
          <Tab.Screen
            name="tab3"
            component={MyPageStackNavigator}
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
