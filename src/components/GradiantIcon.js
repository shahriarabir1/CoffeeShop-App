import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING } from "../theme/theme";
import CustomIcon from "./CustomIcon";

const GradiantIcon = ({ name, color, size, style }) => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linear}
      >
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};

export default GradiantIcon;

const styles = StyleSheet.create({
  linear: {
    borderWidth: 7,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: "hidden",
  },
});
