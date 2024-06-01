import {View, Image, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashImg from '../../../assets/Splash/splashImg1.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const Splash = ({navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      const checkUserLoggedIn = async () => {
        const loggedIn = await isUserLoggedIn();
        if (loggedIn) {
          navigation.navigate('Home');
        } else {
          navigation.navigate('IntroSplash');
        }
      };
      setTimeout(checkUserLoggedIn, 2000);
      // Cleanup function to clear timeout if the component unmounts
      return () => clearTimeout();
    }),
  );
  const isUserLoggedIn = async () => {
    try {
      const user = await AsyncStorage.getItem('guestToken');
      return user == null ? false : true;
    } catch (error) {
      console.error('Error checking user login status:', error);
      return false;
    }
  };
  return (
    <View className="flex-1 relative justify-center items-center">
      <Image source={SplashImg} className="w-full h-full" />
      <View className="absolute bottom-12 w-full px-3">
        <Text className="text-3xl text-white font-extrabold text-left">
          Welcome To
        </Text>
        <Text className="text-8xl  mt-16 text-[#1AB65C] font-extrabold text-left">
          SWR
        </Text>
        <Text className="text-sm mt-6 text-blue text-white font-extrabold text-left">
          The best hotel bookings in the century to accompany your vacation
        </Text>
      </View>
    </View>
  );
};

export default Splash;
