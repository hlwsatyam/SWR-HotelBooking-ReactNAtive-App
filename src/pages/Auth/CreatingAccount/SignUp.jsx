import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Modal,
  Platform,
  Alert,
} from 'react-native';
import {Button} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState} from 'react';
import PrevNavigation from '../../../components/tabs/PrevNavigation';
import InputTab from '../../../components/tabs/InputTab';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableButton from '../../../components/tabs/TouchableButton';
import {BaseApiURL} from '../../../components/SupportiveFunction/Variables';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
const SignUp = ({navigation}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isLoginStarted, setIsLoginStarted] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [userData, setUserData] = useState({
    name: '',
    nickname: '',
    dob: '',
    email: '',
    password: '',
    phone: '',
  });
  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      console.log(selectedDate);
      setDateOfBirth(selectedDate);
      setUserData(prevData => ({
        ...prevData,
        dob: JSON.stringify(selectedDate.toISOString().split('T')[0]),
      }));
    }
    setShowDatePicker(false);
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };
  const [selectedGender, setSelectedGender] = useState(null);

  const genderOptions = ['Male', 'Female', 'Other'];

  const handleInputChange = (text, field) => {
    setUserData(prevData => ({
      ...prevData,
      [field]: text,
    }));
  };
  // const handleSubmit = async (text, field) => {
  //   setIsLoginStarted(true);
  //   try {
  //     await axios
  //       .post(`${BaseApiURL}/api/accountcreate`, {
  //         name: userData.name,
  //         nickname: userData.nickname,
  //         dob: userData.dob,
  //         email: userData.email,
  //         password: userData.password,
  //         phone: userData.phone,
  //       })
  //       .then(async (res) => {
  //         if (res.status == 200) {
  //           // console.log(res.data)
  //           await AsyncStorage.setItem("userData", JSON.stringify(userData));
  //           await AsyncStorage.setItem("guestToken", res.data.token);
  //           navigation.navigate("Home");
  //           setIsLoginStarted(false);
  //         } else {
  //           Dialog.show({
  //             type: ALERT_TYPE.DANGER,
  //             title: "Failed",
  //             textBody: `${res.data?.message}`,
  //             button: "close",
  //           });
  //         }
  //       })
  //       .catch((ERR) =>{
  //       setIsLoginStarted(false)
  //       console.log(ERR)
  //       } )
  //       .finally((e) => {

  //         Dialog.show({
  //           type: ALERT_TYPE.DANGER,
  //           title: "Failed",
  //           textBody: `Server Internal Error!`,
  //           button: "close",
  //         });
  //         setIsLoginStarted(false);
  //       });
  //   } catch (error) {
  //     Dialog.show({
  //       type: ALERT_TYPE.DANGER,
  //       title: "Failed",
  //       textBody: `${error.message}`,
  //       button: "close",
  //     });
  //     setIsLoginStarted(false);
  //   }
  // };

  const handleSubmit = async () => {
    setIsLoginStarted(true);
    try {
      const response = await axios.post(`${BaseApiURL}/api/accountcreate`, {
        name: userData.name,
        nickname: userData.nickname,
        dob: userData.dob,
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
      });

      if (response.status === 200) {
        await AsyncStorage.setItem('guestToken', response.data.token);
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        navigation.navigate('Home');
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Failed',
          textBody: response.data?.message || 'Server Internal Error!',
          button: 'close',
        });
      }
    } catch (error) {
      console.log(error);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Failed',
        textBody: error.message || 'Server Internal Error!',
        button: 'close',
      });
    } finally {
      setIsLoginStarted(false);
    }
  };

  return (
    <View className="flex-1 pt-10  bg-[#003fd3]">
      <ScrollView>
        <PrevNavigation
          navigation={navigation}
          text={'Fill Your Profile'}
          className="m-12 px-3"
        />
        <View>
          <Image
            source={require('../../../../assets/IconScout/user-profile.png')}
            className="h-[300px] w-[300px] m-auto"
          />
        </View>
        <InputTab
          name={'name'}
          onChangeText={handleInputChange}
          iconName={'user'}
          placeholder={'Full Name'}
        />
        <InputTab
          iconName={'user'}
          name={'nickname'}
          onChangeText={handleInputChange}
          placeholder={'Nick Name'}
        />
        <InputTab
          iconName={'envelope'}
          name={'email'}
          onChangeText={handleInputChange}
          placeholder={'email'}
        />
        <InputTab
          iconName={'eye'}
          name={'password'}
          onChangeText={handleInputChange}
          placeholder={'Password'}
        />
        <View className="mx-3 py-3 rounded-xl">
          <View className="w-full p-3 flex-row items-center rounded-xl justify-between  bg-zinc-700 ">
            <TouchableOpacity
              className="flex-row items-center gap-x-2 "
              onPress={openDatePicker}>
              <Icon name="calendar" size={20} color="white" />
              <Text className="text-sm text-white font-semibold">
                Date of Birth
              </Text>
            </TouchableOpacity>
            <TextInput
              className="text-white"
              placeholder="Select Date of Birth"
              placeholderTextColor="#2C3E50"
              value={dateOfBirth.toISOString().split('T')[0]}
              editable={false}
            />
            {showDatePicker && (
              <DateTimePicker
                value={dateOfBirth}
                mode="date"
                display="default"
                onChange={handleDateChange}
                maximumDate={new Date()}
              />
            )}
          </View>
        </View>
        <InputTab
          name={'phone'}
          onChangeText={handleInputChange}
          iconName={'phone'}
          placeholder={'Phone'}
        />
        {isLoginStarted ? (
          <View className="px-5 my-3">
            <Button title="Solid" color={'green'} type="solid" loading />
          </View>
        ) : (
          <TouchableButton
            onPress={handleSubmit}
            label={'Sign In With Password'}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default SignUp;
