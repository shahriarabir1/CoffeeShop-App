import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BORDERRADIUS, COLORS, SPACING } from "../theme/theme";
import CustomIcon from "./CustomIcon";

const BgIcon = (props) => {
  return (
    <View style={[styles.iconBg, { backgroundColor: props.bgcolor }]}>
      <CustomIcon name={props.name} color={props.color} size={props.size} />
    </View>
  );
};

export default BgIcon;

const styles = StyleSheet.create({
  iconBg: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_8,
  },
});
