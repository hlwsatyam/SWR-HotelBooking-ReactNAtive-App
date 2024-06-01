import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const InputTab = ({
  name,
  readyOnly,
  iconName,
  onChangeText,
  onFocus,
  placeholder,
  value,
  onSubmitEditing,
  lastIconName,
}) => {
  return (
    <View className="mx-3 my-2 relative">
      <Icon
        name={iconName}
        color={'white'}
        style={{
          position: 'absolute',
          marginTop: 16,
          marginLeft: 12,
          zIndex: 22,
        }}
      />
      <TextInput
        readyOnly={readyOnly ? readyOnly : false}
        onFocus={onFocus ? onFocus : null}
        value={value ? value : null}
        onSubmitEditing={onSubmitEditing ? onSubmitEditing : null}
        placeholderTextColor="white"
        onChangeText={text => onChangeText(text, name)}
        className="rounded-xl   pl-8 py-2 bg-slate-500 outline-none text-white "
        placeholder={placeholder}
      />
      <Pressable className="absolute right-[5%] top-[30%]">
        <Icon name={lastIconName} color={'white'} />
      </Pressable>
    </View>
  );
};
export default InputTab;
