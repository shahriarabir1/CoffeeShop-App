import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../theme/theme";
import { StatusBar } from "expo-status-bar";
import CustomIcon from "./CustomIcon";
import CoffeeImg from "../../assets/Group 19.png";
import BeanImg from "../../assets/Group 19 (1).png";
import Milk from "../../assets/drop.png";
import Location from "../../assets/location.png";

const DownerPart = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.first}>
        <View style={styles.texts}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.ingred}>{item.special_ingredient}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 25 }}>
          <View
            style={{
              backgroundColor: COLORS.primaryDarkGreyHex,
              paddingHorizontal: 15,
              borderRadius: 10,
              justifyContent: "center",
              flexDirection: "column",
              paddingVertical: 10,
            }}
          >
            <Image
              source={item.type === "Coffee" ? CoffeeImg : BeanImg}
              style={{ height: 30 }}
            />
            <Text
              style={{
                color: COLORS.primaryWhiteHex,
                fontSize: 10,
                textAlign: "center",
              }}
            >
              {item.type}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: COLORS.primaryDarkGreyHex,
              paddingHorizontal: 18,
              borderRadius: 10,
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              source={item.type === "Coffee" ? Milk : Location}
              style={{ height: 27 }}
            />
            <Text style={{ color: COLORS.primaryWhiteHex, fontSize: 10 }}>
              {item.ingredients}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={styles.stars}>
          <CustomIcon name="star" size={20} color={COLORS.primaryOrangeHex} />
          <Text style={{ color: COLORS.primaryWhiteHex, fontWeight: "bold" }}>
            {item.average_rating}
          </Text>
          <Text style={{ color: COLORS.primaryWhiteHex, fontSize: 10 }}>
            ({item.ratings_count})
          </Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.primaryDarkGreyHex,
            paddingHorizontal: 20,
            borderRadius: 10,
            paddingVertical: 15,
          }}
        >
          <Text style={{ color: COLORS.primaryWhiteHex }}>{item.roasted}</Text>
        </View>
      </View>
    </View>
  );
};

export default DownerPart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: COLORS.primaryBlackRGBA,
    height: 165,
    borderTopStartRadius: BORDERRADIUS.radius_25,
    borderTopEndRadius: BORDERRADIUS.radius_25,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  first: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  texts: {
    gap: SPACING.space_2,
  },
  name: {
    fontSize: FONTSIZE.size_20,
    fontWeight: "bold",
    color: COLORS.primaryWhiteHex,
  },
  ingred: {
    color: COLORS.primaryWhiteHex,
    fontSize: 10,
  },
  stars: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
});
