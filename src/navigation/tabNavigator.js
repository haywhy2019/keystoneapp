import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MainStackNavigator from "./stackNavigation";
import Inventory from "../screens/Inventory";

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function MenuScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Menu</Text>
      </View>
    );
  }
  
  function SearchScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  function StoreScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Store!</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  const BottomTabNavigator = () => {
      return(
     
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabelStyle: {
              fontWeight: "bold",
            },
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Store") {
                iconName = "umbrella";
              } else if (route.name === "Inventory") {
                iconName = "folder";
              } else if (route.name === "Search") {
                iconName = "search";
              } else {
                iconName = "menu";
              }
    
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Store" component={StoreScreen} />
          <Tab.Screen name="Inventory" component={Inventory} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
      
      )
   

  }

  export default BottomTabNavigator