import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
const ShowingCalender = ({ selectedDate }) => {
  const [selectedDates, setSelectedDates] = useState({});

  const onDayPress = (day) => {
    const { dateString } = day;
    const today = new Date();
    const currentSelectedDate = new Date(dateString);
    if (currentSelectedDate >= today) {
      let updatedDates = { ...selectedDates };
      if (selectedDates[dateString]) {
        delete updatedDates[dateString];
      } else {
        updatedDates = { ...selectedDates, [dateString]: { selected: true } };
      }
      setSelectedDates(updatedDates);
      selectedDate(updatedDates);
    } else {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "Warning",
        textBody: `You Can Not Select Date Before Today.`,
        button: "close",
      });
    }
  };

  const customTheme = {
    calendarBackground: "transparent",
    textSectionTitleColor: "#b6c1cd",
    textSectionTitleDisabledColor: "#d9e1e8",
    selectedDayBackgroundColor: "#00adf5",
    selectedDayTextColor: "#ffffff",
    todayTextColor: "#00adf5",
    dayTextColor: "#2d4150",
    textDisabledColor: "#d9e1e8",
    dotColor: "#00adf5",
    selectedDotColor: "#ffffff",
    arrowColor: "#00adf5",
    disabledArrowColor: "#d9e1e8",
    monthTextColor: "#00adf5",
    indicatorColor: "blue",
    textDayFontFamily: "monospace",
    textMonthFontFamily: "monospace",
    textDayHeaderFontFamily: "monospace",
    textDayFontWeight: "300",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "300",
    textDayFontSize: 19,
    textMonthFontSize: 19,
    textDayHeaderFontSize: 19,
  };
  return (
    <ScrollView>
      <Calendar
        theme={customTheme}
        onDayPress={onDayPress}
        markedDates={selectedDates}
      />
      <View className="flex-row mt-3 px-20 justify-between  ">
        <View className="flex-col">
          <Text className="text-black   p-2  font-extrabold text-sm  ">
            Check In
          </Text>
          <Text className="bg-green-300 rounded font-bold text-black  p-2  ">
            {Object.keys(selectedDates)[0]}
          </Text>
        </View>
        <View className="flex-col">
          <Text className="text-black   p-2  font-extrabold text-sm  ">
            Check out
          </Text>
          <Text className="bg-green-300 rounded font-bold text-black  p-2  ">
            {Object.keys(selectedDates)[Object.keys(selectedDates).length - 1]}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShowingCalender;
