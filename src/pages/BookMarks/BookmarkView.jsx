import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BaseApiURL } from "../../components/SupportiveFunction/Variables";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import SmallCardHotel from "../../components/tabs/SmallCardHotel";
import { useNavigation } from "@react-navigation/native";

const BookmarkView = () => {
  const [hotels, setHotels] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    fetHotelForBookMarks();
  }, []);
  const fetHotelForBookMarks = async () => {
    try {
      const allBookMarkedId = await AsyncStorage.getItem("allCardId");
      await axios
        .post(`${BaseApiURL}/api/searchingHotelForBookMark`, {
          allBookMarkedId: JSON.parse(allBookMarkedId),
        })
        .then((res) => {
          if (res.status === 200) {
            setHotels(res.data);
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };

  return (
    <ScrollView>
      {hotels?.map((hotel, index) => (
        <SmallCardHotel key={index} navigation={navigation} item={hotel} />
      ))}
    </ScrollView>
  );
};

export default BookmarkView;
