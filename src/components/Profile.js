import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, SPACING } from "../theme/theme";

const Profile = () => {
  return (
    <View>
      <Image
        source={require("../../assets/app_images/avatar.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
