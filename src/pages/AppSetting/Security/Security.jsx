import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import PrevNavigation from '../../../components/tabs/PrevNavigation';
import HeadingTitle from '../../../components/tabs/HeadingTitle';
import TouchableButton from '../../../components/tabs/TouchableButton';
const Security = ({navigation}) => {
  const [list, setList] = useState([
    {title: 'Face ID', status: false},
    {title: 'Remember me', status: false},
    {title: 'Touch ID', status: true},
  ]);
  const handleToggleSwitch = index => {
    const newList = [...list];
    newList[index].status = !newList[index].status;
    setList(newList);
  };
  return (
    <View className="pt-12 flex-1 bg-blue-600">
      <PrevNavigation
        text={'Security'}
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
export default Security;
