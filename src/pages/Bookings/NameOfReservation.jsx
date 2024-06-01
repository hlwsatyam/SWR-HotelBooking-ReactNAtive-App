import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import PrevNavigation from "../../components/tabs/PrevNavigation";
import InputTab from "../../components/tabs/InputTab";
import TouchableButton from "../../components/tabs/TouchableButton";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const NameOfReservation = () => {
  const { hotelId, dates, selectedRooms, totalPerson, price } =
    useRoute().params;
  const [personList, setPersonList] = useState([]);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const navigation = useNavigation();
  const [perosnData, setPersonData] = useState({
    name: "",
    nickName: "",
    email: "",
    phoneNumber: "",
  });
  const onChangeHandlers = (val, text) => {
    setPersonData((prev) => ({ ...prev, [text]: val }));
  };
  useEffect(() => {
    if (personList.length >= totalPerson) {
      setIsFormCompleted(true);
    }
  }, [personList]);
  async function handleAddPerson() {
    if (personList.length < totalPerson) {
      setPersonList([perosnData, ...personList]);
      setPersonData({
        name: "",
        nickName: "",
        email: "",
        phoneNumber: "",
      });
    } else {
      if (isFormCompleted) {
        const userId = await AsyncStorage.getItem("guestToken");
        navigation.navigate("PaymentPage", {
          hotelId,
          dates,
          selectedRooms,
          totalPerson,
          price,
          personList,
          userId,
        });
      }
      setIsFormCompleted(true);
    }
  }
  return (
    <View className="flex-1 px-2 pt-10   ">
      <PrevNavigation
        iconColor={"black"}
        styleForText={"text-black font-bold text-xl "}
        navigation={useNavigation()}
        text={"Name of Reservation"}
      />
      {isFormCompleted ? null : (
        <>
          <BackNameSelect />
          <InputTab
            value={perosnData.name}
            name={"name"}
            onChangeText={onChangeHandlers}
            placeholder={"Full Name"}
          />
          <InputTab
            value={perosnData.nickName}
            name={"nickName"}
            onChangeText={onChangeHandlers}
            placeholder={"Nickname"}
          />
          <InputTab
            value={perosnData.email}
            name={"email"}
            onChangeText={onChangeHandlers}
            placeholder={"Email"}
          />
          <InputTab
            value={perosnData.phoneNumber}
            name={"phoneNumber"}
            onChangeText={onChangeHandlers}
            placeholder={"Phone"}
          />
        </>
      )}

      <TouchableButton
        onPress={handleAddPerson}
        label={
          isFormCompleted
            ? "Continue"
            : `Add ${totalPerson - personList.length} Guest Details More `
        }
      />
      <Text className="text-black border-t-2 pt-4 border-black font-bold mt-2 text-center">
        Reserved Person: {totalPerson}
      </Text>
      {personList?.map((item, idx) => (
        <View
          className="bg-yellow-400 rounded-xl px-2 py-3 my-3"
          key={idx * idx * idx * idx + 1}
        >
          <Text className="font-extralight mb-2">{`Guest : ${idx + 1} `}</Text>
          <Text className="font-semibold ">
            {item?.name ? item.name : `Guest${idx + 1}'s Name`}
          </Text>

          <Text className="font-semibold my-1">
            {item?.phoneNumber
              ? item.phoneNumber
              : `Guest'Number${idx + 1}'s Phone Number`}
          </Text>
        </View>
      ))}
    </View>
  );
};
export default NameOfReservation;

const BackNameSelect = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [list, setList] = useState({
    Ist: "Mr",
    "2nd": "Mrs",
    "3rd": "Ms",
  });
  return (
    <View className="flex-row my-6 items-center justify-between">
      {Object.values(list).map((itm, idx) => (
        <Text
          key={idx * idx + 1}
          onPress={() => setActiveIndex(idx)}
          className={
            idx === activeIndex
              ? "bg-green-400 py-2 text-center w-[30%] text-black font-semibold text-[10px] px-3  rounded-full"
              : "border text-center py-2  w-[30%] text-black font-semibold text-[10px] px-3  rounded-full"
          }
        >
          {" "}
          {itm}{" "}
        </Text>
      ))}
    </View>
  );
};
