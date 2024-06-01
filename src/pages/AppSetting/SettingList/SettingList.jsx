import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dialog from 'react-native-dialog';
import {useNavigation} from '@react-navigation/native';
const SettingList = ({}) => {
  const [listData, setListData] = useState([
    {
      iconName: 'user',
      label: 'Edit Profile',
      route: 'EditProfile',
    },
    {
      iconName: 'bell',
      label: 'Notifications',
      route: 'Notification',
    },
    {
      iconName: 'lock',
      label: 'security',
      route: 'Security',
    },
    {
      iconName: 'support',
      label: 'Help',
      route: 'help',
    },
    {
      iconName: 'credit-card',
      label: 'Terms',
      route: 'terms',
    },
    {
      iconName: 'arrow-right',
      label: 'Logout',
      route: 'EditProfile',
    },
  ]);
  const [isDarkMOdeEnabled, setIsdarkModeEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();
  const LogoutHandler = async () => {
    // Clear AsyncStorage
    await AsyncStorage.clear();
    // Reset navigation to 'splash' screen
    navigation.reset({
      index: 0,
      routes: [{name: 'splash'}],
    });
    // Exit the app
    BackHandler.exitApp();
  };
  const handleNavigation = i => {
    navigation.navigate(i);
  };

  return (
    <View className="mt-6 px-3">
      <LogoutModal
        confirmLg={LogoutHandler}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
      />
      {listData.map((item, idx) => (
        <TouchableOpacity
          onPress={
            item.label === 'Logout'
              ? () => setIsVisible(true)
              : () => handleNavigation(item.route)
          }
          key={5 * idx - 0.444 * 54321}
          className="flex-row my-2  items-center ">
          <View className="w-[10%]">
            <Icon color={'black'} size={20} name={item.iconName} />
          </View>
          <Text className="text-black font-bold">{item.label}</Text>
          {item.label == 'Dark Mode' ? (
            <Switch
              onChange={() => setIsdarkModeEnabled(!isDarkMOdeEnabled)}
              ios_backgroundColor="#3e3e3e"
              className="flex-1"
              value={isDarkMOdeEnabled}
            />
          ) : (
            ''
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SettingList;

const LogoutModal = ({setIsVisible, confirmLg, isVisible}) => {
  return (
    <View>
      <Dialog.Container visible={isVisible}>
        <Dialog.Title>Account Logout</Dialog.Title>
        <Dialog.Description>
          Do you want to Logout this account? You can login Again.
        </Dialog.Description>
        <Dialog.Button onPress={() => setIsVisible(false)} label="Cancel" />
        <Dialog.Button label="Logout" onPress={confirmLg} />
      </Dialog.Container>
    </View>
  );
};
