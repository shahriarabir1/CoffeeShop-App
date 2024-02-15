import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
  ToastAndroid,
  StatusBar,
} from "react-native";
import React, { useRef, useState } from "react";
import { useStore } from "../stores/store";
import CustomIcon from "../components/CustomIcon";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../theme/theme";
import { ScrollView } from "react-native";
import HeaderBar from "../components/HeaderBar";
import Card from "../components/Card";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
const getCategoriesData = (data) => {
  return data.map((item, index) => item.name);
};
const HomeScreen = (props) => {
  const CoffeeList = useStore((state) => state.CoffeeList);
  const BeanList = useStore((state) => state.BeansList);
  const addToCart = useStore((state) => state.addToCart);
  const calculateCartPrice = useStore((state) => state.calculateCartPrice);
  const flatListRef = useRef(null);
  const [categories, setCategories] = useState([
    "All",
    ...getCategoriesData(CoffeeList),
  ]);
  const handleCategoryPress = (index, category) => {
    let cat;
    if (category === "All") {
      cat = categories.filter((item) => item !== "All");
    } else {
      cat = categories.filter((item) => item === category);
    }
    setIndex({ index, category: cat });
    flatListRef?.current?.scrollToEnd();
    setTimeout(() => {
      flatListRef?.current?.scrollToIndex({ index: 0, animated: true });
    }, 100);

    getSorted(category);
  };

  const [searchText, setSearch] = useState("");
  const [categoryIndex, setIndex] = useState({
    index: 0,
    category: [],
  });
  const getSorted = (categ) => {
    let cat;
    if (categ === "All") {
      cat = CoffeeList.filter(
        (item, index) => CoffeeList.indexOf(item) === index
      );
    } else {
      cat = CoffeeList.filter((item, index) => item.name === categ);
    }
    setSort(cat);
  };
  const [sortCoffee, setSort] = useState(CoffeeList);
  const searchCoffee = (search) => {
    const searchExp = new RegExp(search, "i");
    if (search === "") {
      flatListRef?.current?.scrollToEnd();
    }
    setIndex({ index: 0, category: [categories[0]] });

    setSort([
      ...CoffeeList.filter((item) => searchExp.test(item.name.toLowerCase())),
    ]);
  };
  const searchCross = () => {
    setSearch("");
    let cat = CoffeeList.filter(
      (item, index) => CoffeeList.indexOf(item) === index
    );
    setSort(cat);
  };
  const [openModal, setModal] = useState({ item: {}, modal: false });
  const handleModal = (items) => {
    setModal({ item: items, modal: !openModal.modal });
  };
  const onSizeSelected = (size) => {
    useStore((state) => state.addToCart({ ...openModal.item, size: size }));
  };
  const tabbarheight = useBottomTabBarHeight();
  const handleCart = (
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices
  ) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{ ...prices, quantity: 1 }],
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${name} is added to cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollView}
      >
        <HeaderBar />
        <Text style={styles.Title}>Find The Best{"\n"}Coffee For You</Text>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => searchCoffee(searchText)}>
            <CustomIcon
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={(text) => setSearch(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextinputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              style={{ marginLeft: "auto", paddingRight: 20 }}
              onPress={searchCross}
            >
              <Text style={{ color: COLORS.primaryLightGreyHex }}>X</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        {openModal.modal ? (
          <Modal animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Size</Text>
                <TouchableOpacity onPress={() => onSizeSelected("Small")}>
                  <Text style={styles.sizeOption}>Small</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSizeSelected("Medium")}>
                  <Text style={styles.sizeOption}>Medium</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSizeSelected("Large")}>
                  <Text style={styles.sizeOption}>Large</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleModal}>
                  <Text style={styles.cancelOption}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        ) : null}

        <FlatList
          horizontal
          data={categories.filter(
            (item, index) => categories.indexOf(item) === index
          )}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => handleCategoryPress(index, item)}
              style={styles.categoryText}
            >
              <Text
                style={{
                  color:
                    index === categoryIndex.index
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryWhiteHex,

                  paddingLeft: SPACING.space_30,
                  borderRadius: BORDERRADIUS.radius_10,
                }}
              >
                {item}
              </Text>
              {index === categoryIndex.index ? (
                <View
                  style={{
                    height: SPACING.space_10,
                    width: SPACING.space_10,
                    borderRadius: BORDERRADIUS.radius_10,
                    backgroundColor: COLORS.primaryOrangeHex,
                    marginLeft: SPACING.space_30,
                  }}
                />
              ) : (
                <></>
              )}
            </TouchableOpacity>
          )}
        />
        {sortCoffee.length === 0 ? (
          <Text
            style={{
              color: COLORS.primaryLightGreyHex,
              textAlign: "center",
              paddingTop: 20,
            }}
          >
            No Coffee Found
          </Text>
        ) : null}
        <FlatList
          horizontal
          ref={flatListRef}
          showsHorizontalScrollIndicator={false}
          data={sortCoffee}
          contentContainerStyle={styles.flatlistcoffe}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Details", { item })}
            >
              <Card
                item={item}
                handleModal={handleModal}
                handleCart={handleCart}
              />
            </TouchableOpacity>
          )}
        />
        <Text
          style={{
            color: COLORS.primaryWhiteHex,
            paddingLeft: SPACING.space_30,
          }}
        >
          Coffee beans
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeanList}
          contentContainerStyle={[
            styles.flatlistcoffe,
            { marginBottom: tabbarheight },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Details", { item })}
            >
              <Card
                item={item}
                handleModal={handleModal}
                handleCart={handleCart}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollView: {
    flexGrow: 1,
  },
  Title: {
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  searchContainer: {
    flexDirection: "row",
    margin: SPACING.space_30,
    alignItems: "center",
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: FONTSIZE.size_16,
    paddingVertical: SPACING.space_12,
  },
  TextinputContainer: {
    color: COLORS.primaryWhiteHex,
  },
  searchIcon: {
    marginHorizontal: SPACING.space_20,
  },
  categoryText: {
    flexDirection: "column",
    alignItems: "center",
    gap: SPACING.space_10,
  },
  flatlistcoffe: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackRGBA,
  },
  modalContent: {
    backgroundColor: COLORS.primaryLightGreyHex,
    padding: SPACING.space_20,
    borderRadius: FONTSIZE.size_16,
    alignItems: "center",
    aspectRatio: 25 / 25,
  },
  modalTitle: {
    fontSize: FONTSIZE.size_18,
    fontWeight: "bold",
    marginBottom: SPACING.space_20,
    color: COLORS.primaryWhiteHex,
    borderBottomColor: COLORS.primaryBlackHex,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  sizeOption: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_12,
    backgroundColor: COLORS.primaryBlackRGBA,
    padding: 10,
    borderRadius: 10,
  },
  cancelOption: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    marginTop: SPACING.space_20,
  },
});
