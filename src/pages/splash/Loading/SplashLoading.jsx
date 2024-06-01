import {View, Text, Image, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import loadingGIF from '../../../../assets/Splash/Infinite Loader.gif';
import logo from '../../../../assets/logo.png';
import FastImage from 'react-native-fast-image';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
const SplashLoading = ({}) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('auth');
    }, 1000);
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      const backPressHandler = () => {
        navigation.reset({
          index: 0,
          routes: [{name: 'splash'}],
        });
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', backPressHandler);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', backPressHandler);
      };
    }, []),
  );
  return (
    <View className="flex-1 pt-20 bg-blue-600">
      <View className="">
        <Image source={logo} className=" m-auto  w-[200px]  h-[300px]  " />
        {/* <Image source={loadingGIF} className=" m-auto  w-[200px] h-[300px]  " /> */}
        <FastImage
          className=" m-auto  w-[100px] h-[300px]  "
          source={{
            uri: 'https://i.gifer.com/ZKZg.gif',
            headers: {Authorization: 'token'},
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.immutable,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  );
};

export default SplashLoading;
