import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import PrevNavigation from '../../../components/tabs/PrevNavigation'
import passImg from '../../../../assets/Local/chef-serving-food-at-hotel.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableButton from '../../../components/tabs/TouchableButton';
import GoToAnyWhere from '../../../components/SupportiveFunction/GoToAnyWhere';
import InputTab from '../../../components/tabs/InputTab';
const CreateNewPassword = ({ navigation }) => {
    
    return (
        <View className='flex-1 bg-blue-600 ' >
            <PrevNavigation className='mt-12 px-3' />
            <View className='mt-6 ' >
                <Text className='px-4 text-white text-xl' >
                    Create New Password
                </Text>
            </View>
            <View className='mt-6 ' >
                <Image source={passImg} className='w-[70%] h-[200px] m-auto' />
            </View>

            <View className='mt-6 ' >
                <Text className='px-4 text-white text-[10px]' >
                    Create Your New Password
                </Text>
            </View>
        
        <InputTab placeholder={'Enter New Password'} />
        <InputTab placeholder={'Re-Enter Password'} />
          
            <TouchableButton label={'Verify'} onPress={()=>GoToAnyWhere({destination:'Home', navigation})} />
        </View>
    )
}

export default CreateNewPassword