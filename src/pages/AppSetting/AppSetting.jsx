import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import logo from "../../../assets/logo.png";
import ProfileImageSelection from "./ProfileImageSelection/ProfileImageSelection";
import SettingList from "./SettingList/SettingList";
import FooterList from "../FooterList/FooterList";
import axios from "axios";
import { BaseApiURL } from "../../components/SupportiveFunction/Variables";
import GetUserToken from "../../components/SupportiveFunction/GetUserToken";
import { useFocusEffect } from "@react-navigation/native";
const AppSetting = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: "Guest",
    email: "guest123@gmail.com",
  });
  useEffect(() => {
    FetUserData();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      FetUserData();
      return () => {};
    }, [])
  );
  const FetUserData = async () => {
    const token = await GetUserToken();
    if (!token) {
      return;
    }
    try {
      await axios
        .post(`${BaseApiURL}/api/users`, {
          token: token,
        })
        .then((res) => {
          if (res.status === 200) {
            setUserData({
              name: res.data?.name || "Guest",
              email: res.data?.email || "guest@bookie.com",
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="  flex-1 ">
      <View className="flex-row  items-center gap-x-3">
        <Image source={logo} className="w-[50px] rounded-full h-[50px] " />
        <Text className="text-2xl text-black font-bold">Profile</Text>
      </View>
      <View className="mt-8">
        <ProfileImageSelection userData={userData} />
        <Text className="text-[11px] text-center text-black font-semibold">
          {userData.name}
        </Text>
        <Text className="text-[11px] text-center text-black font-semibold">
          {userData.email}
        </Text>
      </View>
      <SettingList navigation={navigation} />
      <FooterList
        navigation={navigation}
        className="flex-row bg-amber-300 py-4 rounded-2xl mt-auto justify-around "
      />
    </View>
  );
};
export default AppSetting;
