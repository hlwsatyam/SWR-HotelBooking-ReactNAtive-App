 
import { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";

const BackNameSelect = ({ setSelectedStatus }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [list, setList] = useState({
    Ist: "Booking",
    "2nd": "Cancelled",
    "3rd": "Refund",
  });
  const pressHandler = (idx, item) => {
    setActiveIndex(idx);
    setSelectedStatus(item);
  };
  return (
    <View className="flex-row my-6   mx-3 items-center justify-between">
      {Object.values(list).map((itm, idx) => (
        <Text
          key={idx}
          onPress={() => pressHandler(idx, itm)}
          className={
            idx === activeIndex
              ? "bg-yellow-400 py-2 text-center w-[30%] border-white text-black font-semibold text-[10px] px-3  rounded-full"
              : "border text-center py-2  w-[30%] text-black font-semibold text-[10px] px-3 border-yellow-400  rounded-full"
          }
        >
          {itm}
        </Text>
      ))}
    </View>
  );
};

export default BackNameSelect;
