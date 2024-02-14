import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../theme/theme";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <View>
      {item.prices.length != 1 ? (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.cartItemStyle}
        >
          <View></View>
        </LinearGradient>
      ) : (
        <></>
      )}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
