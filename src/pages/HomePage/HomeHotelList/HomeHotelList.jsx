import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { BaseApiURL } from "../../../components/SupportiveFunction/Variables";
import { useDispatch, useSelector } from "react-redux";
import { AddCardAction } from "../../../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeHotelList = ({ navigation }) => {
  const [HotelList, setHotelList] = useState(null);
  const AllAddedCardId = useSelector((state) => state.CardDetails);

  const dispatch = useDispatch();

  const [searchingParams, setSearchingParams] = useState({
    HotelName: "",
    city: "noida",
    state: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await axios.post(
        `${BaseApiURL}/api/searchingHotel?HotelName=${searchingParams.HotelName}&city=${searchingParams.city}&state=${searchingParams.state}`
      );
      if (res.status == 200) {
        setHotelList(res.data);
      }
    } catch (error) {}
  };
  const addCard = async (id) => {
    try {
      const allIds = JSON.parse(
        (await AsyncStorage.getItem("allCardId")) || "[]"
      );
      const updatedIds = allIds.includes(id)
        ? allIds.filter((item) => item !== id)
        : [id, ...allIds];
      await AsyncStorage.setItem("allCardId", JSON.stringify(updatedIds));

      // Assuming `dispatch` and `AddCardAction` are properly defined elsewhere
      dispatch(AddCardAction(updatedIds));
    } catch (error) {
      console.error("Error adding card:", error);
      // Handle error here, such as showing an error message to the user
    }
  };

  return (
    <View className=" ">
      {HotelList && (
        <FlatList
          data={HotelList}
          keyExtractor={(item, idx) => `${item?._id}-${idx}`}
          renderItem={({ item, idx }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SingleHotelView", { hotelId: item._id })
              }
              className=" rounded-2xl bg-gray-700/20 mr-3 relative w-[300px]"
              key={Date() + idx * 32}
            >
              <Image
                className=" w-full h-[200px]   rounded-2xl  object-cover"
                source={{
                  uri: `${BaseApiURL}/uploads/${item?.allRoomsOfthisHotel[0]?.imageUrls[0]}`,
                }}
              />
              <View className="absolute top-0 w-full h-full p-3">
                <View className="flex-row justify-end    ">
                  <View className="flex-row justify-end items-center rounded-full gap-x-2 px-2 bg-green-600">
                    <Text className="text-right text-black font-bold ">
                      {item?.stars || "Top"}
                    </Text>
                    <Icon name="star" color={"white"} />
                  </View>
                </View>
                <View className="mt-auto">
                  <Text className="text-gray-700 font-extrabold text-2xl ">
                    {item.hotelName}
                  </Text>
                </View>
                <View className="flex-row justify-between items-center  ">
                  <View>
                    <Text className="text-[10px] text-gray-700 font-bold  ">
                      {item.address}
                    </Text>
                    <Text className="font-bold text-gray-700  ">
                      {" "}
                      <Text className="font-bold text-gray-700 text-xl">
                        ₹ {item.charge}
                      </Text>
                      /Night
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => addCard(item._id)}>
                      <Icon
                        name="bookmark"
                        size={20}
                        color={
                          AllAddedCardId?.includes(item._id) ? "red" : "gray"
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      )}
    </View>
  );
};
export default HomeHotelList;
