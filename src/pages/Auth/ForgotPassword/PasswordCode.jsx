import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import PrevNavigation from '../../../components/tabs/PrevNavigation'
import passImg from '../../../../assets/Local/chef-serving-food-at-hotel.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableButton from '../../../components/tabs/TouchableButton';
import GoToAnyWhere from '../../../components/SupportiveFunction/GoToAnyWhere';
const ForgotPasswordOTP = ({ navigation }) => {
    const [incomingVia, setIncomingVia] = useState('+918059424475')
    return (
        <View className='flex-1 bg-blue-600 ' >
            <PrevNavigation className='mt-12 px-3' />
            <View className='mt-6 ' >
                <Text className='px-4 text-white text-xl' >
                    forgot Password
                </Text>
            </View>
            <View className='mt-6 ' >
                <Image source={passImg} className='w-[70%] h-[200px] m-auto' />
            </View>

            <View className='mt-6 mb-8'>
                <Text className='px-4 text-center text-white text-[12px]' >
                    Code has been sent to {incomingVia}
                </Text>
            </View>
            <View className='flex-row justify-between px-7' >
                <TextInput placeholder='' className='bg-slate-600 p-4 rounded-xl' >

                </TextInput>
                <TextInput placeholder='' className='bg-slate-600 p-4 rounded-xl' >

                </TextInput>
                <TextInput placeholder='' className='bg-slate-600 p-4 rounded-xl' >

                </TextInput>
                <TextInput placeholder='' className='bg-slate-600 p-4 rounded-xl' >

                </TextInput>
            </View>
            <View className='mb-32 mt-6' >
                <TouchableOpacity  >
                    <Text className='text-center text-green-500 font-bold text-sm' >
                        Resend Code
                    </Text>
                     </TouchableOpacity>
            </View>
            <TouchableButton label={'Verify'} onPress={()=>GoToAnyWhere({destination:'createNewPassword',navigation})}  />
        </View>
    )
}

export default ForgotPasswordOTP