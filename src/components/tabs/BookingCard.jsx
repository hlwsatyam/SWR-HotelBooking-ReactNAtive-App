// Filename - App.js

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const BookingCard = ({ item, cancelBooking }) => {
  const naivation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        naivation.navigate("SingleHotelView", { hotelId: item.hotelId._id })
      }
      className="m-auto my-2  w-[97%] "
    >
      <View style={styles.card}>
        <View style={styles.header}>
          <Text className="font-bold text-xl  ">
            Hotel Name: {item.hotelId.hotelName}{" "}
          </Text>
          <Text className="text-[13px]">Address: {item.hotelId.address} </Text>
          <Text className="text-[13px] border-b-teal-300 border-b-2 pb-2">
            Location: {item.hotelId.city},{item.hotelId.state},
            {item.hotelId.country}
          </Text>
          <Text className="text-[13px] font-bold pt-2">
            Room No: {item.roomId.roomNo}
          </Text>
          <Text className="text-[13px] font-bold pt-2">
            Charge: {item.roomId.roomPrice}
          </Text>
          <Text className="text-[13px] font-bold pt-2">Date: {item.dates}</Text>
          {item.isCanceled ? (
            <Text className="mt-2 text-red-700 font-bold bg-red-500/20 p-2 rounded-md text-[10px]">
              Canceled
            </Text>
          ) : (
            <View className="flex-row items-center justify-between py-2">
              <Text className="text-[10px] bg-green-500/20 p-2 rounded-md font-bold ">
                {item.isAprooved ? "Confiremed" : "Pending For Approoval"}
              </Text>
              <TouchableOpacity
                className=" bg-green-500/20 p-2 rounded-md font-bold"
                onPress={() => cancelBooking(item._id)}
              >
                <Text className="text-[12px]">Cancel Booking</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
});

export default BookingCard;
