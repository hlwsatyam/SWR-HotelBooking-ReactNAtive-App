import { View, Text, Image } from "react-native";
import React from "react";
import PrevNavigation from "../../components/tabs/PrevNavigation";
import { useNavigation } from '@react-navigation/native';

const ServerError = () => {
const navigation=useNavigation()
  return (
    <View className="flex-1 pt-2 bg-zinc-600 ">
      <PrevNavigation navigation={navigation} text={"Back To Home"} />
      <View className="mt-10" >
        <Image
        source={require("../../../assets/images/Connection Error.gif")}
        className="h-[300px] w-[300px] m-auto"
      />
      <Text className="mt-0 text-xl text-center text-white font-bold ">
        Internal Connection Error
      </Text>  
      </View>
    
    </View>
  );
};

export default ServerError;
