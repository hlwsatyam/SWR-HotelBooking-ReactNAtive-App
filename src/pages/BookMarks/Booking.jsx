import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  BackHandler,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import PrevNavigationwithRightIcon from '../../components/tabs/PrevNavigationwithRightIcon';
import BookmarkView from './BookmarkView';
import BookingView from './BookingView';

import axios from 'axios';
import {BaseApiURL} from '../../components/SupportiveFunction/Variables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BookingDate} from '../PaymentPage/PaymentPage';
import TouchableButton from '../../components/tabs/TouchableButton';
import BackNameSelect from '../../components/tabs/BackNameSelect';
import {useFocusEffect} from '@react-navigation/native';
const Booking = ({navigation}) => {
  const [isBookMarkPress, setIsBookMarkPress] = React.useState(false);
  const [isCancelledPress, setIsCancelledPress] = useState('');

  const [status, setStatus] = useState('Booking');
  const setSelectedStatus = item => {
    setStatus(item);
  };
  useFocusEffect(
    React.useCallback(() => {
      const backPressHandler = () => {
        navigation.navigate('Home');
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', backPressHandler);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', backPressHandler);
      };
    }, []), // Empty dependency array ensures that the effect runs only once when the component mounts
  );

  return (
    <View className="flex-1 pt-10 bg-emerald-400  ">
      <PrevNavigationwithRightIcon
        navigation={navigation}
        isBookMarkPress={isBookMarkPress}
        setIsBookMarkPress={setIsBookMarkPress}
        text={'Your Recently Booking'}
        styleForText={'py-2 text-white font-bold text-xl'}
      />
      {isBookMarkPress ? null : (
        <BackNameSelect setSelectedStatus={setSelectedStatus} />
      )}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {isBookMarkPress ? (
          <BookmarkView navigation={navigation} />
        ) : (
          <BookingView status={status} navigation={navigation} />
        )}
      </ScrollView>
    </View>
  );
};
export default Booking;

export const StatusCard = ({item, callback}) => {
  const handleBookingCancel = () => {
    // Display an alert for confirmation
    Alert.alert(
      'Confirmation',
      'Are you sure you want to cancel your booking?',
      [
        {
          text: 'No',
          onPress: () => console.log('Booking not cancelled'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => cancelBooking()},
      ],
    );
  };
  const cancelBooking = async () => {
    try {
      await axios.post(`${BaseApiURL}/api/user/cancelHotel`, {
        hotelId: item._id,
      });
      callback();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="w-full p-2 rounded-xl my-2 border-white border   bg-red-700">
      <Text className="text-white font-bold">{item.hotelId.hotelName}</Text>
      <Text className="text-white text-[12px] ">
        {item.hotelId.city} , {item.hotelId.state}{' '}
      </Text>
      <Text className="text-white text-[10px] ">{item.hotelId.address} </Text>
      <Text className="text-white text-[10px] ">
        No Of Person: {item.personList.length}{' '}
      </Text>
      <Text className="text-white text-[10px] ">
        Paid Amount: {item.price}{' '}
      </Text>
      <BookingDate dates={item.dates} />
      {item.isCanceled ? (
        <Text className="text-white font-extralight text-sm">
          This Booking is Canceled
        </Text>
      ) : (
        <TouchableButton onPress={handleBookingCancel} label={'Cancle'} />
      )}
    </View>
  );
};
