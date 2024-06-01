import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";
const PrevNavigationwithRightIcon = ({
  listPress,
  bookmarkPress,
  navigation,
  setIsBookMarkPress,
  isBookMarkPress,
  styleForText,
  text,
  className,
}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View
      className={className ? className : "flex-row items-center gap-x-4 px-2"}
    >
      <TouchableOpacity onPress={goBack}>
        <Icon name="arrow-left" size={17} color="white" />
      </TouchableOpacity>
      <Text
        className={styleForText ? styleForText : "text-white text-xl font-bold"}
      >
        {text}
      </Text>
      <View className="flex-1 gap-x-3 items-center flex-row justify-end">
        <TouchableOpacity onPress={() => setIsBookMarkPress(false)}>
          <Icon
            name="list"
            size={17}
            color={isBookMarkPress ? "white" : "red"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsBookMarkPress(true)}>
          <Icon
            name="bookmark"
            size={17}
            color={isBookMarkPress ? "red" : "white"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PrevNavigationwithRightIcon;
