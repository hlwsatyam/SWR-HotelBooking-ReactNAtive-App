import {View, Text, Image, BackHandler} from 'react-native';
import React from 'react';
import PrevNavigation from '../../components/tabs/PrevNavigation';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import successfullyPayment from '../../../assets/images/Successfully Done.gif';
import FastImage from 'react-native-fast-image';

const PaymentSuccess = () => {
  const navigation = useNavigation();

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
    <View className="flex-1 px-2 pt-10 bg-[#12c069] ">
      <Text className="text-center mt-12 text-white font-bold ">
        {' '}
        Hotel Booking Conformed!
      </Text>
      {/* <Image
        source={successfullyPayment}
        className="w-[300px]   mx-auto h-[300px]"
      /> */}
      <FastImage
        className="w-[299px] h-[200px] m-auto  "
        source={{
          uri: 'https://assets.materialup.com/uploads/9ba2d687-d7d3-4361-8aee-7b2a3c074761/preview.gif',
          headers: {Authorization: 'token'},
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Booking')}
        className="py-3 bg-green-900/40  rounded-2xl m-3 ">
        <Text className="text-center text-white font-bold ">Check Status</Text>
      </TouchableOpacity>
    </View>
  );
};
5;
export default PaymentSuccess;
