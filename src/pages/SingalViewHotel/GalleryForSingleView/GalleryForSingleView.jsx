import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const GalleryForSingleView = ({}) => {
  return (
    <View  className='px-2 bg-slate-500 ' >
      <View className="flex-row items-center justify-between">
        <Text className="text-white font-extrabold text-xl ">
          Gallery Photos
        </Text>
        <TouchableOpacity>
          <Text className="text-green-400 font-bold">See All</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default GalleryForSingleView;
