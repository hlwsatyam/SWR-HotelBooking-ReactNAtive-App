import {View, Text, Image, Button, BackHandler} from 'react-native';
import React, {useState} from 'react';
import SplashImg2 from '../../../../assets/Splash/splashImg2.png';
import SplashImg3 from '../../../../assets/Splash/splashImg3.png';
import SplashImg4 from '../../../../assets/Splash/splashImg4.png';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';
const IntroSplash = ({}) => {
  const TotalSpash = 3;
  const [splashCount, setSplashCount] = useState(0);
const navigation=useNavigation()
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
    }, []), // Empty dependency array ensures that the effect runs only once when the component mounts
  );

  const [splashContent, setSplashContent] = useState([
    {
      img: SplashImg2,
      header: 'Let’s have the best vacation with us',
      desc: 'Welcome to our exclusive hotel booking platform, where simplicity meets distinction. Discover handpicked stays tailored just for you. From chic boutique hotels to luxurious resorts, we redefine your travel experience.',
    },
    {
      img: SplashImg3,
      header: 'Travel made easy in your hands',
      desc: 'Travel made easy, right at your fingertips. Our platform is designed to simplify your journey, ensuring that every step, from planning to booking, is effortlessly accessible.',
    },
    {
      img: SplashImg4,
      header: 'Let’s discover the world with us',
      desc: "Embark on a journey of discovery with us. Let's explore the world together, making every destination a new chapter in your travel story. ",
    },
  ]);
  const changeHander = status => {
    if (splashCount >= 2 || status == 'skip') {
      navigation.navigate('IntroSplashLoading');
    } else {
      return setSplashCount(splashCount + 1);
    }
  };
  return (
    <View className="flex-1 bg-blue-900 relative justify-center items-center">
      <Image
        source={splashContent[splashCount]?.img}
        className="w-full top-0  absolute  "
      />
      <View className="w-full mt-24">
        <IntroSplash1
          header={splashContent[splashCount]?.header}
          desc={splashContent[splashCount]?.desc}
        />
        <View className="text-center mt-12 flex-row justify-center gap-x-3 items-center">
          {[1, 1, 2].map((val, idx) => (
            <Text
              key={Date() + idx}
              className={`text-4xl ${
                idx == splashCount ? 'w-[30px]' : 'w-[10px] '
              } h-[10px] bg-gray-300 rounded-full text-center text-white`}></Text>
          ))}
        </View>
        <View>
          <View className="mt-4 px-3">
            <Button
              title="Skip"
              onPress={() => changeHander('skip')}
              color="#1AB65C"
            />
          </View>
          <View className="mt-4 px-3">
            <Button
              title="Next"
              onPress={() => changeHander('next')}
              color="#1AB65C"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default IntroSplash;

const IntroSplash1 = ({header, desc}) => {
  return (
    <View>
      <Text className="w-[50%]  tracking-wider  px-4 text-4xl text-white ">
        {header}
      </Text>
      <Text className="mt-8 text-sm tracking-widest  text-white font-thin px-4">
        {desc}
      </Text>
    </View>
  );
};
