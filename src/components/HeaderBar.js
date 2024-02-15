import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import GradiantIcon from "./GradiantIcon";
import Profile from "./Profile";

const HeaderBar = (props) => {
  return (
    <View style={styles.header}>
      <GradiantIcon
        name="grid"
        color={COLORS.primaryDarkGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.headerText}>{props.title}</Text>
      <Profile />
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  header: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
