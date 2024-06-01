import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import React, {useEffect} from 'react';
import Splash from './src/pages/splash/Splash';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import IntroSplash from './src/pages/splash/Intro/IntroSplash';
import SplashLoading from './src/pages/splash/Loading/SplashLoading';
import Auth from './src/pages/Auth/Auth';
import Login from './src/pages/Auth/CreatingAccount/Login';
import SignUp from './src/pages/Auth/CreatingAccount/SignUp';
import ForgotPassword from './src/pages/Auth/ForgotPassword/ForgotPassword';
import ForgotPasswordOTP from './src/pages/Auth/ForgotPassword/PasswordCode';
import CreateNewPassword from './src/pages/Auth/ForgotPassword/CreateNewPassword';
import HomePage from './src/pages/HomePage/HomePage';
import SingleViewHotel from './src/pages/SingalViewHotel/SingleViewHotel';
import Notification from './src/pages/AppSetting/Notification/Notification';
import Security from './src/pages/AppSetting/Security/Security';
import SelectDate from './src/pages/Bookings/SelectDate/SelectDate';
import NameOfReservation from './src/pages/Bookings/NameOfReservation';
import {StatusBar} from 'react-native';
import EditProfile from './src/pages/AppSetting/EditProfile/EditProfile';
import AppSetting from './src/pages/AppSetting/AppSetting';
import SearchView from './src/pages/SearchView/SearchView';
import HelpPage from './src/pages/Supports/Help';
import Terms from './src/pages/Terms/Terms';
import Booking from './src/pages/BookMarks/Booking';
import ServerError from './src/pages/ServerError/ServerError';
import PaymentPage from './src/pages/PaymentPage/PaymentPage';
import PaymentSuccess from './src/pages/PaymentPage/PaymentSuccess';
import TopHotel from './src/pages/TopHotel/TopHotel';
import {AlertNotificationRoot, Toast} from 'react-native-alert-notification';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
import {ScrollView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <Provider store={Store}>
      <AlertNotificationRoot>
        <NavigationContainer>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#FCD839"
            hidden={false}
            translucent={true}
          />
          <Stack.Navigator
            initialRouteName="splash"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="IntroSplash" component={IntroSplash} />
            <Stack.Screen name="IntroSplashLoading" component={SplashLoading} />
            <Stack.Screen name="auth" component={Auth} />
            <Stack.Screen name="loginWithPassword" component={Login} />
            <Stack.Screen name="signUp" component={SignUp} />
            <Stack.Screen
              name="forgotLoginPassword"
              component={ForgotPassword}
            />
            <Stack.Screen
              name="forgotLoginPasswordOTP"
              component={ForgotPasswordOTP}
            />
            <Stack.Screen
              name="createNewPassword"
              component={CreateNewPassword}
            />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="search" component={SearchView} />
            <Stack.Screen name="searchingBar" component={TopHotel} />
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Security" component={Security} />
            <Stack.Screen name="ServerError" component={ServerError} />
            <Stack.Screen name="help" component={HelpPage} />
            <Stack.Screen name="SelectDate" component={SelectDate} />
            <Stack.Screen
              name="NameofReservation"
              component={NameOfReservation}
            />
            <Stack.Screen name="PaymentPage" component={PaymentPage} />
            <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
            <Stack.Screen name="SingleHotelView" component={SingleViewHotel} />
            <Stack.Screen name="terms" component={Terms} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="AppSetting" component={AppSetting} />
          </Stack.Navigator>
        </NavigationContainer>
      </AlertNotificationRoot>
    </Provider>
  );
};
export default App;