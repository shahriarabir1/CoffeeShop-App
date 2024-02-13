import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import OrderHistory from "../screens/OrderHistory";
import CustomIcon from "../components/CustomIcon";
import { COLORS } from "../theme/theme";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            intensity={100}
            tint="dark"
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Cart") {
            iconName = "cart";
          } else if (route.name === "Favourite") {
            iconName = "heart";
          } else if (route.name === "History") {
            iconName = "notifications";
          }

          return (
            <CustomIcon
              name={iconName}
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="History" component={OrderHistory} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
});
