import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
 
} from "react-native";
import React, { useState } from "react";
import { COLORS, BORDERRADIUS } from "../theme/theme";
import CustomIcon from "../components/CustomIcon";
import DownerPart from "../components/DownerPart";
import { useStore } from "../stores/store";
import PayFooter from "../components/PayFooter";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import HeaderBar from "../components/HeaderBar";
import EmptyAnimation from "../components/EmptyAnimation";
const FavouriteScreen = (props) => {
  const addToFavorite = useStore((state) => state.addToFavoriteList);
  const favouriteList = useStore((state) => state.FavoritesList);
  console.log(favouriteList);
  const favoriteHandler = (favourite, type, id) => {
    favourite ? deleteItem(type, id) : addToFavorite(type, id);
  };
  const deleteItem = useStore((state) => state.deleteFromFavoriteList);
  const tabbarheight = useBottomTabBarHeight();

  return (
    <View style={[styles.container, { marginBottom: tabbarheight }]}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        extendBody={true}
        style={styles.scrol}
      >
        <HeaderBar title="Favourites" />
        {favouriteList.length == 0 ? (
          <EmptyAnimation title={"No Favourite Item"} />
        ) : (
          favouriteList.map((favouriteList, index) => (
            <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
              <View
                style={{
                  borderRadius: BORDERRADIUS.radius_25,
                  overflow: "hidden",
                }}
              >
                <ImageBackground
                  source={favouriteList.imagelink_portrait}
                  style={styles.image}
                >
                  <View style={styles.upperIcon}>
                    <TouchableOpacity
                      onPress={() =>
                        favoriteHandler(
                          favouriteList.favourite,
                          favouriteList.type,
                          favouriteList.id
                        )
                      }
                    >
                      <CustomIcon
                        name={
                          !favouriteList.favourite
                            ? "heart-circle"
                            : "heart-circle-outline"
                        }
                        color={
                          !favouriteList.favourite
                            ? COLORS.primaryWhiteHex
                            : COLORS.primaryRedHex
                        }
                        size={36}
                        style={styles.back}
                      />
                    </TouchableOpacity>
                  </View>
                  <DownerPart item={favouriteList} />
                </ImageBackground>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  style={styles.cartItemStyle}
                >
                  <Text
                    style={{
                      color: COLORS.primaryWhiteHex,
                      paddingBottom: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Description
                  </Text>
                  <Text style={styles.desc} numberOfLines={3}>
                    {favouriteList.description}
                  </Text>
                </LinearGradient>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrol: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 20 / 25,
    justifyContent: "space-between",
  },
  upperIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 30,
  },
  cartItemStyle: {
    padding: 20,
    backgroundColor: COLORS.primaryGreyHex,
  },
  desc: {
    color: COLORS.primaryWhiteHex,
    textAlign: "justify",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: COLORS.primaryBlackHex,
  },
});
