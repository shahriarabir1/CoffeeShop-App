import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { COLORS, FONTFAMILY, FONTSIZE } from "../theme/theme";

const EmptyAnimation = ({ title }) => {
  return (
    <View style={styles.emptyContainer}>
      <LottieView
        style={styles.LottieStyle}
        source={require("../lottie/coffeecup.json")}
        autoPlay
        loop
      />
      <Text style={styles.LottiText}>{title}</Text>
    </View>
  );
};

export default EmptyAnimation;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
  },
  LottieStyle: {
    height: 300,
  },
  LottiText: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: "center",
  },
});
