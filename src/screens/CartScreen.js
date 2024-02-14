import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useStore } from "../stores/store";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import EmptyAnimation from "../components/EmptyAnimation";
import HeaderBar from "../components/HeaderBar";
import { COLORS } from "../theme/theme";
import PayFooter2 from "../components/PayFooter2";
import CartItem from "../components/CartItem";
const CartScreen = ({ navigation }) => {
  const CartList = useStore((state) => state.CartList);
  const CartPrice = useStore((state) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state) => state.incrementCartItemQuantity
  );
  const decrementCartItemQuantity = useStore(
    (state) => state.decrementCartItemQuantity
  );
  const calculateCartPrice = useStore((state) => state.calculateCartPrice);
  const tabbarheight = useBottomTabBarHeight();

  const buttonPressHandler = () => {
    navigation.push("Payment");
  };
  const incrementHandler = (id, size) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  const decrementHandler = (id, size) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
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
              <View style={{ flexDirection: "column", gap: 20 }}>
                {CartList.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push("Details", { item: item });
                    }}
                    key={index}
                  >
                    <CartItem
                      item={item}
                      incrementHandler={incrementHandler}
                      decrementHandler={decrementHandler}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          {CartList.length != 0 ? (
            <PayFooter2
              buttonTitle="Pay"
              price={{ price: CartPrice }}
              title={"Pay"}
              buttonPressHandler={buttonPressHandler}
            />
          ) : (
            <></>
          )}
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
