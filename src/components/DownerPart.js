import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../theme/theme";
import { StatusBar } from "expo-status-bar";
import CustomIcon from "./CustomIcon";

const DownerPart = ({ item }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.first}>
        <View style={styles.texts}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.ingred}>{item.special_ingredient}</Text>
        </View>
        <View style={styles.stars}>
          <CustomIcon name="star" size={20} color={COLORS.primaryOrangeHex} />
          <Text style={{ color: COLORS.primaryWhiteHex, fontWeight: "bold" }}>
            {item.average_rating}
          </Text>
          <Text style={{ color: COLORS.primaryWhiteHex, fontSize: 10 }}>
            ({item.ratings_count})
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 30 }}>
          <View style={{ backgroundColor: COLORS.primaryDarkGreyHex }}>
            <Text style={{ color: COLORS.primaryWhiteHex }}>{item.type}</Text>
          </View>
          <View style={{ backgroundColor: COLORS.primaryDarkGreyHex }}>
            <Text style={{ color: COLORS.primaryWhiteHex }}>{item.type}</Text>
          </View>
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
    flexDirection: "row",
    backgroundColor: COLORS.primaryBlackRGBA,
    marginBottom: "-20px",
    height: 150,
    borderTopStartRadius: BORDERRADIUS.radius_25,
    borderTopEndRadius: BORDERRADIUS.radius_25,
    justifyContent: "space-between",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  first: {
    flexDirection: "column",
    justifyContent: "space-between",
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
