import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";
import { COLORS } from "../theme/theme";

const PayFooter = ({ price, title, handleCart, itemIndex }) => {
  return (
    <View style={styles.footer}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.primaryWhiteHex,
            fontSize: 12,
          }}
        >
          Price
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Text
            style={{
              color: COLORS.primaryOrangeHex,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            $
          </Text>
          <Text
            style={{
              color: COLORS.primaryWhiteHex,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {price.price}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primaryOrangeHex,
          borderRadius: 15,
          paddingVertical: 15,
          paddingHorizontal: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() =>
          handleCart(
            itemIndex.id,
            itemIndex.index,
            itemIndex.name,
            itemIndex.roasted,
            itemIndex.imagelink_square,
            itemIndex.special_ingredient,
            itemIndex.type,
            price
          )
        }
      >
        <Text style={{ color: COLORS.primaryWhiteHex, fontWeight: "bold" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PayFooter;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 30,
    alignItems: "center",
  },
});
