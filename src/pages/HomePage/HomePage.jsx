import {View, Text, Image, BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputTab from '../../components/tabs/InputTab';
import FooterList from '../FooterList/FooterList';
import HomeHotelList from './HomeHotelList/HomeHotelList';

import FetLocalUserData from '../../components/SupportiveFunction/FetLocalUserData';
import CityHomeList from '../../components/tabs/CityHomeList';
import ChooseUs from '../../components/tabs/ChooseUs';
import {ScrollView} from 'react-native';

import SearchNearBy from '../../components/tabs/SearchNearBy';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {AddCardAction} from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [guestName, setGuestName] = useState('Guest');
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    handleAsycCard();
  }, []);
  const handleAsycCard = async () => {
    try {
      const allIds = JSON.parse(
        (await AsyncStorage.getItem('allCardId')) || '[]',
      );
      dispatch(AddCardAction(allIds));
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

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
  const fetchData = async () => {
    try {
      const {name} = await FetLocalUserData();
      setGuestName(name ? name : 'Guest');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="flex-1 p-2 ">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="pt-8">
        <View className="">
          <Text className="text-[13px] text-green-500 font-bold ">
            Hello {guestName}
          </Text>
          <Text className="text-2xl text-green-500 font-extrabold  text-center ">
            SWR{' '}
          </Text>
        </View>
        <SearchingTab navigation={navigation} />
        <HomeHotelList navigation={navigation} />
        <SearchNearBy />
        <CityHomeList navigation={navigation} />
        <ChooseUs />
        <Image
          source={{
            uri: 'https://cdn.dribbble.com/users/6498639/screenshots/15138706/media/0262f2a4841a14755bd96261e11b6334.gif',
          }}
          className="w-full h-[300px]  "
        />
      </ScrollView>
      <FooterList
        navigation={navigation}
        className="flex-row py-4 rounded-2xl mt-auto justify-around "
      />
    </View>
  );
};
export default Home;



export const SearchingTab = ({navigation}) => {
  const [searchingText, setSearchingText] = useState('');
  const handleSearch = text => {
    setSearchingText(text);
  };
  const navigateToSearch = async () => {
    if (searchingText != '' && searchingText.length > 2) {
      navigation.navigate('search', {
        searchingText: searchingText,
      });
    }
  };
  return (
    <InputTab
      onSubmitEditing={navigateToSearch}
      iconName={'search'}
      name={'search'}
      onChangeText={(text, field) => handleSearch(text)}
      placeholder="Search"
    />
  );
};
