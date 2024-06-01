import {View, Text, Alert, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import PrevNavigation from '../../../components/tabs/PrevNavigation';
import ShowingCalender from './ShowingCalender';
import HeadingTitle from '../../../components/tabs/HeadingTitle';
import TouchableButton from '../../../components/tabs/TouchableButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

import {BaseApiURL} from '../../../components/SupportiveFunction/Variables';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
const SelectDate = () => {
  const navigation = useNavigation();
  const {hotelId, selectedRooms} = useRoute().params;
  const [oneNightCharge, setOneNightCharge] = useState('');
  const [dates, setDates] = useState(null);
  const [totalSelectedDate, setTotalSelectedDate] = React.useState(1);
  const [Count, setCount] = React.useState(1);
  const [isAvaillabe, setIsAvailable] = useState(false);
  const [price, setPrice] = useState(100);
  const setPerson = val => {
    setCount(val);
  };
  useEffect(() => {
    FetData();
  }, [dates, selectedRooms]);
  const FetData = async () => {
    try {
      await axios
        .post(`${BaseApiURL}/api/RoomAvailabilityCheck`, {
          selectedRooms,
          dates,
        })
        .then(res => {
          if (res.status === 200) {
            setPrice(res.data?.charge);
            setIsAvailable(res.data?.isAvailable || false);
          } else {
            setPrice(res.data?.charge || 0);
            setIsAvailable(res.data?.isAvailable || false);
            Dialog.show({
              type: ALERT_TYPE.INFO,
              title: 'Information',
              textBody: `${res.data?.message}`,
              button: 'close',
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const selectedDate = dates => {
    setTotalSelectedDate(Number(Object.keys(dates).length));
    setDates(dates);
    setPrice(Number(Object.keys(dates).length) * Count * oneNightCharge);
  };
  const handleBookNow = async () => {
    if (isAvaillabe) {
      navigation.navigate('NameofReservation', {
        hotelId,
        dates,
        selectedRooms,
        totalPerson: Count,
        price: price,
      });
    }
  };
  return (
    <ScrollView className="flex-1 pt-10 px-2   ">
      <PrevNavigation
        styleForText={'text-black font-bold text-xl '}
        navigation={navigation}
        iconColor={'black'}
        text={'Select Date'}
      />
      <ShowingCalender selectedDate={selectedDate} />
      <GuesCount
        selectedRooms={selectedRooms}
        setPerson={setPerson}
        selectedDates={selectedDate}
      />
      <Text className="text-black my-5 text-center font-extrabold text-xl ">
        {' '}
        Total:Rs{price}{' '}
      </Text>
      <TouchableButton
        onPress={isAvaillabe ? handleBookNow : null}
        label={isAvaillabe ? 'Continue' : 'Not Available'}
      />
    </ScrollView>
  );
};
export default SelectDate;
const GuesCount = ({setPerson, selectedRooms}) => {
  const [Count, setCount] = React.useState(1);
  useEffect(() => {
    if (Count < 0) setCount(1);
    else setPerson(Count);
  }, [Count]);

  const updateCount = async condition => {
    try {
      if (Count >= 3 * selectedRooms.length) {
        Dialog.show({
          type: ALERT_TYPE.INFO,
          title: 'Warning',
          textBody: `You Can.t Add More Guest! Please Select More Room If Available On Hotel!`,
          button: 'close',
        });
      }
      condition === 'Decreament'
        ? Count > 1
          ? setCount(Count - 1)
          : setCount(1)
        : Count >= 3 * selectedRooms.length
        ? setCount(Count)
        : setCount(Count + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="mt-4">
      <HeadingTitle
        title={'Guest'}
        backgroundClass={'bg-transparent my-4 '}
        mainClass={'text-sm font-bold text-black'}
      />
      <View className="flex-row py-2 rounded-2xl  bg-slate-700/80 justify-center   ">
        <Text
          onPress={() => updateCount('Decreament')}
          className="text-xl bg-slate-400 text-black rounded-xl text-center w-[60px] leading-[60px] ">
          {' '}
          -{' '}
        </Text>
        <Text className="  text-white rounded-xl text-2xl text-center w-[60px] leading-[60px] ">
          {' '}
          {Count}{' '}
        </Text>
        <Text
          onPress={() => updateCount('Increament')}
          className="text-xl bg-slate-400 text-black rounded-xl text-center w-[60px] leading-[60px] ">
          {' '}
          +{' '}
        </Text>
      </View>
    </View>
  );
};
