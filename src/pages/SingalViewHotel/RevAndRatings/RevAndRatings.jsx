import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import SingleCommentList from "./SingleCommentList/SingleCommentList";
import { TextInput } from "react-native";
import axios from "axios";
import { BaseApiURL } from "../../../components/SupportiveFunction/Variables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
const RevAndRatings = ({ hotelId }) => {
  const [revText, setRevText] = useState("");
  const [revList, setRevList] = useState([]);
  const [isReadyToUpdateState, setIsReadyToUpdateState] = useState(false);
  useEffect(() => {
    fetchReviewForHotel();
  }, [isReadyToUpdateState]);
  
  const fetchReviewForHotel = async () => {
    try {
      const response = await axios.post(
        `${BaseApiURL}/api/user/hotel/allRev/${hotelId}`
      );
      if (response.status == 200) {
        console.log(response.data);
        setRevList(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const addCommentHander = async () => {
    try {
      const userId = await AsyncStorage.getItem("guestToken");
      if (!userId) return;
      await axios
        .post(`${BaseApiURL}/api/user/hotel/addrev`, {
          hotelId,
          userId,
          revText,
        })
        .then((res) => {
          if (res.status == 200) {
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: "Success",
              textBody: `${res.data.message}`,
              button: "close",
            });
            setIsReadyToUpdateState(!isReadyToUpdateState);
            setRevText("");
          } else if (res.status == 203) {
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: "Failed",
              textBody: `${res.data.message}`,
              button: "close",
            });
          }
        });
    } catch (error) {
      setRevText("");
    }
  };
  return (
    <View className="mt-4 border-t-2 py-3 border-t-slate-100 ">
      <View className="flex-row gap-x-4 px-3 items-center">
        <TextInput
          value={revText}
          placeholder="Write a review..."
          onChangeText={(text) => setRevText(text)}
          className=" bg-emerald-500/60 py-3 px-4 flex-1 rounded "
        />
        <TouchableOpacity
          onPress={addCommentHander}
          className="bg-yellow-300 py-3 px-4 rounded"
        >
          <Text className="text-black font-extralight">Add</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center   justify-around">
        <Text className="text-black font-bold ">Review</Text>
        <View>
          <Text className="text-black font-semibold">
            <Icon name="star" color={"yellow"} size={13} /> {5}.0 (
            {revList?.length}Reviews)
          </Text>
        </View>
      </View>
      {revList?.map((item, idx) => (
        <SingleCommentList key={idx} data={item} />
      ))}
    </View>
  );
};
export default RevAndRatings;
