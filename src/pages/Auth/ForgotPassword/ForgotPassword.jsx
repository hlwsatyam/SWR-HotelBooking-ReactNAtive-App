import { View, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import PrevNavigation from "../../../components/tabs/PrevNavigation";
import passImg from "../../../../assets/Local/chef-serving-food-at-hotel.png";
import Icon from "react-native-vector-icons/FontAwesome";
import TouchableButton from "../../../components/tabs/TouchableButton";
import { TextInput, Text } from "react-native-paper";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";

import axios from "axios";
import { BaseApiURL, baseApiURL } from "../../../components/SupportiveFunction/Variables";
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [selectedMethod, setSelectedMethod] = useState(1);
  const onSubmit = async () => {
    try {
      const res = await axios.post(`${BaseApiURL}/api/forgetPassword`, {
        isUserSide: true,
        email: email,
      });
      if (res.status === 200) {
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Success",
          textBody: `${res.data.message}`,
          button: "close",
        });
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: "Failed",
          textBody: `${res.data.message}`,
          button: "close",
        });
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Internet Issue");
    }
  };
  const changeHandler = (field, text) => {
    setEmail(text);
   
  };
  return (
    <View className="flex-1 pt-12 bg-blue-600 ">
      <PrevNavigation text={'Forget Password'} navigation={navigation}  className="mt-12 px-3" />
 
      <View className="mt-6 ">
        <Image source={passImg} className="w-[70%] h-[200px] m-auto" />
      </View>
      <View className="mt-12 ">
        <Text className="px-4 text-white text-[10px] text-center">
          Select which contact details should we use to reset your password
        </Text>
      </View>
      <View className="px-14  my-7">
        <TouchableOpacity
          onPress={() => setSelectedMethod(0)}
          className={` flex-row   bg-indigo-400 rounded-xl   ${
            selectedMethod == 0 ? "border-green-500 border-2 " : ""
          }  py-2 items-center gap-x-3 `}
        >
          <View>
            <Icon name="envelope" size={20} color={"white"} />
          </View>
          <View className=" pr-4 flex-1">
            <Text className="uppercase text-white">via Email:</Text>
            <TextInput
              onChangeText={(text) => changeHandler("email", text)}
              label="Email"
              class="bg-blue-600 w-3/4"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedMethod(1)}
          className={`flex-row bg-indigo-400 rounded-xl my-6  ${
            selectedMethod == 1 ? "border-green-500 border-2 " : ""
          }   py-2 items-center gap-x-3 `}
        >
          <View>
            <Icon name="phone" size={20} color={"white"} />
          </View>
          <View>
            <Text className="text-white uppercase">via Message:</Text>
            <Text className="text-white  "> Coming Soon </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableButton label={"Continue"} onPress={() => onSubmit()} />
    </View>
  );
};

export default ForgotPassword;
