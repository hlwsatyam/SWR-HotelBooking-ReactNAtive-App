import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import PrevNavigation from '../../../components/tabs/PrevNavigation';
import InputTab from '../../../components/tabs/InputTab';
import TouchableButton from '../../../components/tabs/TouchableButton';
import axios from 'axios';
import {BaseApiURL} from '../../../components/SupportiveFunction/Variables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
const EditProfile = ({navigation}) => {
  const [userData, setUserData] = useState({
    name: 'Guest',
    nickname: 'Guest',
    email: 'guest123@gmail.com',
  });
  useEffect(() => {
    FetUserData();
  }, []);
  const FetUserData = async () => {
    const token = await AsyncStorage.getItem('guestToken');
    if (!token) {
      return;
    }
    try {
      await axios
        .post(`${BaseApiURL}/api/users`, {
          token: token,
        })
        .then(res => {
          console.log(res.data);
          if (res.status === 200) {
            setUserData({
              name: res.data?.name || 'Guest',
              email: res.data?.email || 'guest@bookie.com',
              nickname: res.data?.nickname || 'Guest',
            });
          } else {
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: 'Failed',
              textBody: `${res.data?.message}`,
              button: 'close',
            });
          }
        });
    } catch (error) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Failed',
        textBody: `${error.message}`,
        button: 'close',
      });
    }
  };
  const saveHandler = async () => {
    const token = await AsyncStorage.getItem('guestToken');
    if (!token) {
      return;
    }
    try {
      await axios
        .post(`${BaseApiURL}/api/updateuser`, {
          token: token,
          name: userData.name || 'Guest',
          email: userData.email || 'guest@bookie.com',
          nickname: userData.nickname || 'Guest',
        })
        .then(res => {
          if (res.status === 200) {
            setUserData({
              name: res.data?.name || 'Guest',
              email: res.data?.email || 'guest@bookie.com',
              nickname: res.data?.nickname || 'Guest',
            });
            navigation.navigate('AppSetting');
          } else {
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: 'Failed',
              textBody: `${res.data?.message}`,
              button: 'close',
            });
          }
        });
    } catch (error) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Failed',
        textBody: `${error.message}`,
        button: 'close',
      });
    }
  };
  const onChangeText = (value, name) => {
    setUserData(PREV => ({...PREV, [name]: value}));
    console.log(`${name} ${value}`);
  };
  return (
    <View className="bg-emerald-400  pt-6  flex-1">
      <PrevNavigation
        text={' Edit Profile'}
        navigation={navigation}
        styleForText={'my-4 text-white font-bold text-sm'}
        className="px-3 "
      />
      <InputTab
        value={userData.name}
        name={'name'}
        onChangeText={onChangeText}
        iconName={'user'}
      />
      <InputTab
        value={userData.nickname}
        name={'nickname'}
        onChangeText={onChangeText}
        iconName={'user'}
      />
      <InputTab
        value={userData.email}
        name={'email'}
        readyOnly={true}
        onChangeText={onChangeText}
        iconName={'user'}
      />
      <TouchableButton onPress={saveHandler} label={'Update'} />
    </View>
  );
};

const DatePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.container}>
      <Button onPress={showDatepicker} title="Select Date of Birth" />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <Text>Date of Birth: {date.toDateString()}</Text>
    </View>
  );
};

export default EditProfile;
