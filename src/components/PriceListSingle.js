import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BORDERRADIUS, COLORS, FONTSIZE } from "../theme/theme";
import CustomIcon from "./CustomIcon";

const PriceListSingle = ({ item }) => {
  return (
    <View style={styles.pricesContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.sizeText}>{item.size}</Text>
        <View style={styles.priceText}>
          <Text
            style={{
              color: COLORS.primaryOrangeHex,
              fontWeight: "bold",
              fontSize: FONTSIZE.size_20,
            }}
          >
            $
          </Text>
          <Text
            style={{
              color: COLORS.primaryWhiteHex,
              fontWeight: "bold",
              fontSize: FONTSIZE.size_20,
            }}
          >
            {item.price}
          </Text>
        </View>
      </View>

      <View style={styles.quantityContainer}>
        <View style={styles.decrement}>
          <TouchableOpacity>
            <CustomIcon
              name="remove-outline"
              size={15}
              color={COLORS.primaryWhiteHex}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.priceQuantity}>{item.quantity}</Text>
        <View style={styles.decrement}>
          <TouchableOpacity>
            <CustomIcon name="add" size={15} color={COLORS.primaryWhiteHex} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PriceListSingle;
const styles = StyleSheet.create({
  sizeText: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 70,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    textAlign: "center",
    paddingVertical: 7,
    borderRadius: BORDERRADIUS.radius_10,
  },
  priceText: {
    flexDirection: "row",
    gap: 5,
  },
  pricesContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
  priceQuantity: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 70,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    textAlign: "center",
    paddingVertical: 7,
    borderRadius: BORDERRADIUS.radius_10,
    borderColor: COLORS.primaryOrangeHex,
    borderWidth: 1,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  decrement: {
    paddingVertical: 8,
    borderRadius: BORDERRADIUS.radius_8,
    backgroundColor: COLORS.primaryOrangeHex,
    width: 35,
    alignItems: "center",
  },
});
