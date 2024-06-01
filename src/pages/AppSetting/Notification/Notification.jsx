import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import PrevNavigation from '../../../components/tabs/PrevNavigation';
import HeadingTitle from '../../../components/tabs/HeadingTitle';
import TouchableButton from '../../../components/tabs/TouchableButton';
const Notification = ({navigation}) => {
  const [list, setList] = useState([
    {title: 'General Notification', status: false},
    {title: 'Sound', status: false},
    {title: 'Vibrate', status: true},
    {title: 'App Updates', status: false},
    {title: 'New Service Available', status: false},
    {title: 'New tips available', status: false},
  ]);

  const handleToggleSwitch = index => {
    const newList = [...list];
    newList[index].status = !newList[index].status;
    setList(newList);
  };

  return (
    <View className="pt-12 flex-1 bg-blue-600">
      <PrevNavigation
        text={'Notification'}
        navigation={navigation}
        className="px-3"
      />
      <View className="mt-12">
        {list.map((item, index) => (
          <View className="flex-row items-center" key={index * index * 80.0444}>
            <Text className="flex-1 text-slate-300 font-semibold text-sm ">
              {' '}
              {item.title}{' '}
            </Text>
            <Switch
              onValueChange={() => handleToggleSwitch(index)}
              value={item.status}
            />
          </View>
        ))}
      </View>
      <TouchableButton label={'Update'} />
    </View>
  );
};
export default Notification;
