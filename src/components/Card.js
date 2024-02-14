import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../theme/theme";
import CustomIcon from "./CustomIcon";
import BgIcon from "./BgIcon";

const CARD_WIDTH = Dimensions.get("window").width * 0.32;
const Card = (props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.cardGrad}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <ImageBackground
        source={props.item.imagelink_square}
        style={styles.cardImg}
        resizeMode="cover"
      >
        <View style={styles.cardText}>
          <CustomIcon
            name="star"
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_12}
          />
          <Text
            style={{
              color: COLORS.primaryWhiteHex,
              fontSize: FONTSIZE.size_12,
            }}
          >
            {props.item.average_rating}
          </Text>
        </View>
      </ImageBackground>
      <View style={{ paddingHorizontal: 10, flexDirection: "column", gap: 10 }}>
        <View style={{ flexDirection: "column", gap: 5 }}>
          <Text style={{ color: COLORS.primaryWhiteHex, fontSize: 15 }}>
            {props.item.name}
          </Text>
          <Text style={{ color: COLORS.primaryWhiteHex, fontSize: 10 }}>
            {props.item.special_ingredient}
          </Text>
        </View>
        <View style={styles.pricebar}>
          <Text style={styles.priceText}>
            ${"\t"}
            <Text style={{ color: COLORS.primaryWhiteHex }}>
              {props.item.prices[0].price}
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() =>
              props.handleCart({
                id: props.item.id,
                index: props.item.index,
                name: props.item.name,
                roasted: props.item.roasted,
                imagelink_square: props.item.imagelink_square,
                special_ingredient: props.item.special_ingredient,
                type: props.item.type,
                prices: [{ ...props.item.prices[0], quantity: 1 }],
              })
            }
          >
            <BgIcon
              color={COLORS.primaryWhiteHex}
              name="add"
              bgcolor={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardGrad: {
    borderRadius: BORDERRADIUS.radius_20,
    padding: 10,
    paddingBottom: 20,
  },
  cardImg: {
    height: CARD_WIDTH,
    width: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: "hidden",
  },
  cardText: {
    flexDirection: "row",
    gap: SPACING.space_10,
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  priceText: {
    color: COLORS.primaryOrangeHex,
    fontSize: 15,
    fontWeight: "bold",
  },
  pricebar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
