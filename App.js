import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import DetailsScreen from "./src/screens/DetailsScreen";
import TabNavigator from "./src/navigators/TabNavigator";
import PaymentScreen from "./src/screens/PaymentScreen";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar
        barStyle="light-content" // Change the text color of the status bar
        backgroundColor="#0C0F14" // Set your desired status bar color
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            paddingTop: Constants.statusBarHeight,
          },
        }}
      >
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    backgroundColor: "#0C0F14",
  },
});
