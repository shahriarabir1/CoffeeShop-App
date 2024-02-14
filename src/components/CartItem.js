import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../theme/theme";
import PriceListMulti from "./PriceListMulti";
import PriceListSingle from "./PriceListSingle";

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
          <View style={styles.cartItemRow}>
            <Image
              source={item.imagelink_square}
              style={styles.CartItemImage}
            />
            <View style={styles.cartItemInfo}>
              <View>
                <Text style={styles.cartTitle}>{item.name}</Text>
                <Text style={styles.cartSubTitle}>
                  {item.special_ingredient}
                </Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>{item.roasted}</Text>
              </View>
            </View>
          </View>
          {item.prices.map((item, index) => (
            <View>
              <PriceListMulti item={item} />
            </View>
          ))}
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.cartItemStyle}
        >
          <View style={styles.cartItemRow}>
            <Image
              source={item.imagelink_square}
              style={styles.CartItemImage}
            />
            <View style={styles.cartItemInfo}>
              <View>
                <Text style={styles.cartTitle}>{item.name}</Text>
                <Text style={styles.cartSubTitle}>
                  {item.special_ingredient}
                </Text>
              </View>
              {item.prices.map((item, index) => (
                <View>
                  <PriceListSingle item={item} />
                </View>
              ))}
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItemStyle: {
    flex: 1,
    gap: SPACING.space_12,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CartItemImage: {
    height: 130,
    width: 130,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cartItemRow: {
    flexDirection: "row",
    gap: SPACING.space_12,
  },
  cartItemInfo: {
    paddingVertical: SPACING.space_4,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  cartTitle: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  cartSubTitle: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryLightGreyHex,
  },
  roastedContainer: {
    height: 50,
    width: 50 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    backgroundColor: COLORS.primaryDarkGreyHex,
    justifyContent: "center",
    alignItems: "center",
  },
  roastedText: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
});
