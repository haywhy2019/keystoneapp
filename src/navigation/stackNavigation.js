import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import AddInventory from "../screens/AddInventory";
import Inventory from "../screens/Inventory";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllInventory"
        component={Inventory}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AddInventory"
        component={AddInventory}
        options={{
          presentation: "modal",
        
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
