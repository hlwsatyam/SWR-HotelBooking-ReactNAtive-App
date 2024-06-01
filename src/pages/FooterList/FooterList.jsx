import { View, Text, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

const FooterList = ({ navigation, ...style }) => {
  const listData = [
    { label: "home", name: "Home", route: "Home" },

    {
      label: "search",
      name: "magnify",
      route: "searchingBar",
    },
    {
      label: "bookmark",
      name: "Booking",
      route: "Booking",
    },
    {
      label: "user",
      name: "Profile",
      route: "AppSetting",
    },
  ];
  return (
    <View {...style}>
      {listData.map((item, idx) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.route)}
          key={Date.now() + idx}
        >
          <Icon size={30} color={"green"} name={item.label} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default FooterList;
