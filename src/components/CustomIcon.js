import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
const CustomIcon = (props) => {
  return (
    <Icon
      name={props.name}
      color={props.color}
      size={props.size}
      style={props.style}
    />
  );
};

export default CustomIcon;

const styles = StyleSheet.create({});
