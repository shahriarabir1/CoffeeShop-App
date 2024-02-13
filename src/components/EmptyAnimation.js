import { StyleSheet, Text, View } from "react-native";
import React from "react";


const EmptyAnimation = ({ title }) => {
  return (
    <View style={styles.emptyContainer}>
    </View>
  );
};

export default EmptyAnimation;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
