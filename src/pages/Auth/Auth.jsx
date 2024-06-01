import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PrevNavigation from '../../components/tabs/PrevNavigation';
import TouchableButton from '../../components/tabs/TouchableButton';
import GoToAnyWhere from '../../components/SupportiveFunction/GoToAnyWhere';
import {Image} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from '@react-native-google-signin/google-signin';
const Auth = ({navigation}) => {
  const GoToLoginPage = () => {
    navigation.navigate('loginWithPassword');
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

  // async function onGoogleButtonPress() {
  //   try {
  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //     // Get the users ID token
  //     const {idToken} = await GoogleSignin.signIn();

  //     // Create a Google credential with the token
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     // Sign-in the user with the credential
  //     return auth().signInWithCredential(googleCredential);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // }

  return (
    <ScrollView className="  ">
      <PrevNavigation
        text={'dffff'}
        navigation={navigation}
        className=" mt-12 bg-slate-100  px-3"
      />
      <View>
        <Image
          source={require('../../../assets/logo.png')}
          resizeMode="contain"
          className="h-[300px]    w-[300px] m-auto"
        />
      </View>
      <Text className="mt-[0%] mb-16 text-3xl  text-center text-black font-bold">
        Let’s you in
      </Text>
      {/* <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleButtonPress}
        disabled={false}
      />
      ;
      <Icon.Button
        name="google"
        className="mx-3 bg-slate-700"
        backgroundColor={'transparent'}
        onPress={() => {}}>
        Login with Google
      </Icon.Button>
      <Icon.Button
        name="facebook"
        className="mx-3 mt-4 bg-slate-700"
        backgroundColor={'transparent'}
        onPress={this.loginWithFacebook}>
        Login with Facebook
      </Icon.Button> */}
      <View className="mt-10 flex-row gap-x-2 items-center justify-center">
        <Text className="w-[100px] h-[4px] bg-black  rounded-full"></Text>
        <Text className="text-black">Or</Text>
        <Text className="w-[100px] h-[4px] rounded-full bg-black "></Text>
      </View>
      <TouchableButton label="Signing With Password" onPress={GoToLoginPage} />
      <View className="flex-row gap-x-1 mt-12 items-center justify-center">
        <Text className="text-black font-semibold">
          Don`t Have an Account ?
        </Text>
        <TouchableOpacity
          onPress={() => GoToAnyWhere({destination: 'signUp', navigation})}>
          <Text className="text-green-300 font-bold">Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Auth;
