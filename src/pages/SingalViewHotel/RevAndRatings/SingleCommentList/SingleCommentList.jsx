import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const SingleCommentList = ({ data }) => {
  const SinglComment = {
    commentDate: new Date(data.createdAt).toISOString().split('T')[0] || "23 apr 2321",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtd_HNHfQoBBdaCEOTPLORrQuSo-YRGbCVnWocH6uDGg&s",
    givenStar: 2,
    guestName: data.user?.name || "Guest",
    description: data?.revText || "Good Services",
  };
  return (
    <View className="my-2 py-2 px-2 rounded-xl bg-slate-500">
      <View className="flex-row items-center justify-between  ">
        <View className="h-[50px] w-[50px] ">
          <Image
            source={{ uri: SinglComment.imageurl }}
            className="h-[100%] rounded-full w-[100%]"
          />
        </View>
        <View>
          <Text className="text-white font-bold">
            {" "}
            {SinglComment.guestName}{" "}
          </Text>
          <Text className="text-white font-bold">
            {" "}
            {SinglComment.commentDate}{" "}
          </Text>
        </View>
        <View>
        <Text className="mt-2 text-[10px] font-semibold text-white">
        {SinglComment.description}
      </Text>
        </View>
      </View>
    
    </View>
  );
};

export default SingleCommentList;
