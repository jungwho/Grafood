import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPageScreen from "../MyPageScreen";
import ReviewPlusScreen from "../ReviewPlusScreen";
import ProfileScreen from "../ProfileScreen";

const MyPageStack = createStackNavigator();

function MyPageStackNavigator() {
  return (
    <MyPageStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MyPageStack.Screen name="MyPage" component={MyPageScreen} />
      <MyPageStack.Screen name="ReviewPlus" component={ReviewPlusScreen} />
      <MyPageStack.Screen name="Profile" component={ProfileScreen} />
    </MyPageStack.Navigator>
  );
}

export default MyPageStackNavigator;
