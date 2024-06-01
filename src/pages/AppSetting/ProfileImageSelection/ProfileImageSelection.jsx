import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import logo from '../../../../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProfileImageSelection = ({userData}) => {
  const [profileImage, setProfileImage] = useState(logo);
  const [firstSelect, setFirstSelect] = useState(true);
  const selectImage = async () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      result => {
        if (result.assets) {
          setProfileImage(result.assets[0].uri); // Set profileImage to the URI of the selected image
        }
        setFirstSelect(false);
      },
    );
  };

  return (
    <View className="mt-8">
      <TouchableOpacity
        className="m-auto bg-zinc-600 p-1 rounded-full relative"
        onPress={selectImage}>
        <View>
          <Image
            alt="Profile Image"
            className="w-[100px] rounded-full h-[100px] "
            source={firstSelect ? profileImage : {uri: profileImage}}
          />
          <Text className="absolute bottom-[13px] right-0">
            <Icon name="pencil" color={'green'} size={25} />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ProfileImageSelection;
