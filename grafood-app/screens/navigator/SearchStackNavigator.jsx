import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../SearchScreen";
import RestaurantScreen from "../RestaurantScreen";
import LocationScreen from "../LocationScreen";
import ReviewGraphScreen from "../ReviewGraphScreen";

const SearchStack = createStackNavigator();

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Restaurant" component={RestaurantScreen} />
      <SearchStack.Screen name="Location" component={LocationScreen} />
      <SearchStack.Screen name="ReviewGraph" component={ReviewGraphScreen} />
    </SearchStack.Navigator>
  );
}

export default SearchStackNavigator;
