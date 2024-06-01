import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import SmallCardHotel from "../../components/tabs/SmallCardHotel";
import axios from "axios";
import { BaseApiURL } from "../../components/SupportiveFunction/Variables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BookingCard from "../../components/tabs/BookingCard";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
const BookingView = ({ status, navigation }) => {
  const [hotels, setHotels] = React.useState([]);
  const [isChangetrigged, setIsChangeTriggred] = useState(false);
  useEffect(() => {
    fetchData();
  }, [isChangetrigged, status]);
  const fetchData = async () => {
    console.log("sddddd");
    try {
      const token = await AsyncStorage.getItem("guestToken");
      const data = await axios.post(`${BaseApiURL}/api/guest/myBooking`, {
        token,
      });
      if (data.status === 200) {
        setHotels(data.data);
      } else {
      }
    } catch (error) {
      comsole.log(error);
    }
  };
  const cancleBooking = async (hotelId) => {
    try {
      const token = await AsyncStorage.getItem("guestToken");
      const data = await axios.post(`${BaseApiURL}/api/guest/cancleBooking`, {
        token,
        hotelId,
      });
      if (data.status === 200) {
        setIsChangeTriggred(!isChangetrigged);
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Success",
          textBody: data.data?.message || "Server Internal Error!",
          button: "close",
        });
      } else {
        Dialog.show({
          type: ALERT_TYPE.INFO,
          title: "Warning",
          textBody: data.data?.message || "Server Internal Error!",
          button: "close",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      {hotels?.map((item, index) => {
        if (status === "Cancelled") {
          if (item.isCanceled) {
            return (
              <BookingCard
                cancelBooking={cancleBooking}
                key={index}
                item={item}
              />
            );
          }
        }
        if (status === "Booking") {
          if (!item.isCanceled) {
            return (
              <BookingCard
                cancelBooking={cancleBooking}
                key={index}
                item={item}
              />
            );
          }
        }
      })}
    </View>
  );
};
export default BookingView;
