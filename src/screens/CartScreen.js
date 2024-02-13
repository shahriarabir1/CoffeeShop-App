import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useStore } from "../stores/store";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import EmptyAnimation from "../components/EmptyAnimation";
import HeaderBar from "../components/HeaderBar";
import { COLORS } from "../theme/theme";
const CartScreen = () => {
  const CartList = useStore((state) => state.CartList);
  const CartPrice = useStore((state) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state) => state.incrementCartItemQuantity
  );
  const decrementCartItemQuantity = useStore(
    (state) => state.decrementCartItemQuantity
  );
  const tabbarheight = useBottomTabBarHeight();
  return (
    <View style={[styles.screenContainer, { marginBottom: tabbarheight }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollView}
      >
        <View style={styles.ScrollViewHeader}>
          <View style={styles.cartItem}>
            <HeaderBar title="Cart" />
            {CartList.length == 0 ? (
              <EmptyAnimation title={"The Cart is Empty"} />
            ) : (
              <></>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollView: {
    flexGrow: 1,
  },
  ScrollViewHeader: {
    flex: 1,
    justifyContent: "space-between",
  },
  cartItem: {
    flex: 1,
  },
});
