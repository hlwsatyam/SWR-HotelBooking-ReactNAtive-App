import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import TouchableButton from "../../../components/tabs/TouchableButton";
import PrevNavigation from "../../../components/tabs/PrevNavigation";
import InputTab from "../../../components/tabs/InputTab";
import GoToAnyWhere from "../../../components/SupportiveFunction/GoToAnyWhere";
import { BaseApiURL } from "../../../components/SupportiveFunction/Variables";
import LoadingButton from "../../../components/tabs/LoadingButton";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = ({ navigation }) => {
  const [iSloading, setISLoading] = React.useState(false);
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  handleChange = (value, name) => {
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async () => {
    setISLoading(true);
    try {
      const response = await axios.post(
        `${BaseApiURL}/api/createAccountWithEmailPassword`,
        {
          email: userData.email,
          password: userData.password,
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        await AsyncStorage.setItem("guestToken", response.data.token);
        navigation.navigate("Home");
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: "Failed",
          textBody: `${response.data?.message}`,
          button: "close",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setISLoading(false);
    }
  };
  return (
    <View className="bg-blue-600 flex-1">
      <PrevNavigation navigation={navigation} className="mt-12 px-3" />
      <Text className="mt-[50%] m-16 text-3xl  text-center text-white font-bold">
        Create your Account
      </Text>
      <InputTab
        name={"email"}
        onChangeText={handleChange}
        iconName={"envelope"}
        placeholder={"Email"}
      />
      <InputTab
        name={"password"}
        onChangeText={handleChange}
        iconName={"eye"}
        placeholder={"Password"}
      />
      {iSloading ? (
        <LoadingButton />
      ) : (
        <TouchableButton onPress={handleSubmit} label="Signing" />
      )}
      <TouchableOpacity
        className="mt-6"
        onPress={() =>
          GoToAnyWhere({ destination: "forgotLoginPassword", navigation })
        }
      >
        <Text className="text-green-300 text-center font-bold">
          Forgot the password?
        </Text>
      </TouchableOpacity>
      <View className="mt-10 flex-row gap-x-2 items-center justify-center">
        <Text className="w-[100px] h-[4px] bg-white  rounded-full"></Text>
        <Text className="text-white text-sm">Or Continue With</Text>
        <Text className="w-[100px] h-[4px] rounded-full bg-white "></Text>
      </View>
      <View className="flex-row justify-center mt-12">
        {/* <Icon.Button
          name="google"
          className="mx-3 bg-slate-700"
          backgroundColor={"transparent"}
          onPress={this.loginWithFacebook}
        >Sign In With Google</Icon.Button> */}
        {/* <Icon.Button
          name="facebook"
          className="mx-3 bg-slate-700"
          backgroundColor={"transparent"}
          onPress={this.loginWithFacebook}
        ></Icon.Button>
        <Icon.Button
          name="apple"
          className="mx-3 bg-slate-700"
          backgroundColor={"transparent"}
          onPress={this.loginWithFacebook}
        ></Icon.Button> */}
      </View>

      <View className="flex-row gap-x-1 mt-12 items-center justify-center">
        <Text className="text-white font-semibold">
          Don`t Have an Account ?
        </Text>
        <TouchableOpacity
          onPress={() => GoToAnyWhere({ destination: "signUp", navigation })}
        >
          <Text className="text-green-300 font-bold">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
