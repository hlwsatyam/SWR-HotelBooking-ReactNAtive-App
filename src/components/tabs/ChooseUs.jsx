import { View, Text } from "react-native";
import React from "react";

const ChooseUs = () => {
  return (
    <View className="bg-green-600 p-2 ">
      <Text className="text-xl text-white ">Reason for choosing us1</Text>
      <Text className="text-white mt-2">User-Friendly Interface</Text>
      <Text className="text-[12px] text-white ">
        SWR offers an intuitive and easy-to-use interface, making it simple for
        users to search, book, and manage hotel rooms.
      </Text>
      <Text className="text-white mt-2">
        Wide Selection of Hotels and Rooms
      </Text>
      <Text className="text-[12px] text-white ">
        SWR provides users with a wide range of options when it comes to
        choosing hotels and rooms.
      </Text>
      <Text className="text-white mt-2">
      Transparent Reviews and Ratings:
      </Text>
      <Text className="text-[12px] text-white ">
      SWR displays honest and transparent reviews and ratings from verified users, helping prospective guests make informed decisions about their bookings. 
      </Text>
      <Text className="text-white mt-2">
      Secure Payment Options:
      </Text>
      <Text className="text-[12px] text-white ">
      SWR prioritizes user security and offers secure payment options for booking hotel rooms. 
      </Text>
      <Text className="text-white mt-2">
      Responsive Customer Support
      </Text>
      <Text className="text-[12px] text-white ">
      SWR provides responsive customer support to assist users with any queries or issues they may encounter during the booking process or their stay.
      </Text>
    </View>
  );
};

export default ChooseUs;
