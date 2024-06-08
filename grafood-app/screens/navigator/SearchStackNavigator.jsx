import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../SearchScreen";

const SearchStack = createStackNavigator();

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

export default SearchStackNavigator;
