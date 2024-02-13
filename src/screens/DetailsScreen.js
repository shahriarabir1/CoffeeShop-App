import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Button,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../theme/theme";
import CustomIcon from "../components/CustomIcon";
import DownerPart from "../components/DownerPart";
import { useStore } from "../stores/store";
const DetailsScreen = (props) => {
  const item = props.route.params.item;
  const itemIndex = useStore((state) =>
    item.type === "Coffee" ? state.CoffeeList : state.BeansList
  )[item.index];

  const [price, setPrice] = useState(itemIndex.prices[0]);
  const addToFavorite = useStore((state) => state.addToFavoriteList);
  const deleteItem = useStore((state) => state.deleteFromFavoriteList);
  const addToCart = useStore((state) => state.addToCart);
  const calculateCartPrice = useStore((state) => state.calculateCartPrice);
  const storage = useStore((state) => state.clearStorage);
  const clearStorage = () => {
    storage();
    useStore.setState({
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
    });
  };
  const backHandler = () => {
    props.navigation.pop();
  };
  const favoriteHandler = (favourite, type, id) => {
    favourite ? deleteItem(type, id) : addToFavorite(type, id);
  };
  const handleCart = (
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price
  ) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{ ...price, quantity: 1 }],
    });
    calculateCartPrice();
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} extendBody={true}>
        <ImageBackground
          source={itemIndex.imagelink_portrait}
          style={styles.image}
        >
          <View style={styles.upperIcon}>
            <TouchableOpacity onPress={backHandler}>
              <CustomIcon
                name="arrow-back-circle"
                color={COLORS.primaryWhiteHex}
                size={36}
                style={styles.back}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                favoriteHandler(
                  itemIndex.favourite,
                  itemIndex.type,
                  itemIndex.id
                )
              }
            >
              <CustomIcon
                name={
                  !itemIndex.favourite ? "heart-circle" : "heart-circle-outline"
                }
                color={
                  !itemIndex.favourite
                    ? COLORS.primaryWhiteHex
                    : COLORS.primaryRedHex
                }
                size={36}
                style={styles.back}
              />
            </TouchableOpacity>
          </View>
          <DownerPart item={itemIndex} />
        </ImageBackground>
        <View style={styles.descView}>
          <Text
            style={{
              color: COLORS.primaryWhiteHex,
              paddingBottom: 15,
              fontWeight: "bold",
            }}
          >
            Description
          </Text>
          <Text style={styles.desc} numberOfLines={3}>
            {itemIndex.description}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: COLORS.primaryWhiteHex,
              paddingLeft: 20,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            Size
          </Text>
          <View style={styles.sizes}>
            {itemIndex.prices.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: COLORS.primaryDarkGreyHex,
                  width: 100,
                  paddingVertical: 8,
                  borderRadius: 5,
                  borderWidth: price.price === item.price ? 1 : 0,
                  borderColor:
                    price.price === item.price
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryWhiteHex,
                }}
                onPress={() => {
                  setPrice(item);
                }}
              >
                <Text
                  style={{
                    color:
                      price.price === item.price
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryWhiteHex,
                    textAlign: "center",
                  }}
                >
                  {item.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
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
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
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
              Add to Cart
            </Text>
          </TouchableOpacity>
          <Button title="Clear" onPress={clearStorage} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrol: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 20 / 25,
    justifyContent: "space-between",
  },
  upperIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  descView: {
    padding: 20,
  },
  desc: {
    color: COLORS.primaryWhiteHex,
    textAlign: "justify",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: COLORS.primaryBlackHex,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 30,
    alignItems: "center",
  },
});
