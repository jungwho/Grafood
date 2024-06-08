import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ShareScreen from "../ShareScreen";

const ShareStack = createStackNavigator();

function ShareStackNavigator() {
  return (
    <ShareStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ShareStack.Screen name="Share" component={ShareScreen} />
    </ShareStack.Navigator>
  );
}

export default ShareStackNavigator;
