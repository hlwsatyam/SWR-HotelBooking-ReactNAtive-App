import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import axios from 'axios';
import {BaseApiURL} from '../SupportiveFunction/Variables';
import RoomDetails from './RoomDetails';

const SearchNearBy = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [rooms, setRooms] = useState(null);
  const [location, setLocation] = useState({
    city: '',

    state: '',
  });

  useEffect(() => {
    _getLocationPermission();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.post(`${BaseApiURL}/api/citiesHotels`, {
        city: location.city,
        state: location.state,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const _getLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'Please allow your device location to access your hotel location!',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          _getCurrentLocation();
        } else {
          Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: 'Location Permission',
            textBody: 'Turn On location permissions For SWR App ',
            button: 'Close',
          });
          console.log('Location permission denied');
        }
      } catch (err) {
        Dialog.show({
          type: ALERT_TYPE.WARNING,
          title: 'Restart your Device',
          textBody: 'Please Restart Your Mobile',
          button: 'Close',
        });
      }
    }
  };

  const _getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(async location => {
        await axios
          .get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`,
          )
          .then(res => {
            if (res.status === 200) {
              setLocation({
                city: res.data.address.city,
                state: res.data.address.state,
              });
              setPermissionGranted(true);
            }
          });
      })
      .catch(error => {
        Dialog.show({
          type: ALERT_TYPE.WARNING,
          title: 'Location Error',
          textBody:
            'Failed to get current location. Please make sure your GPS is enabled and try again.',
          button: 'Close',
        });
      });
  };

  const fetchCitiesHotels = async () => {
    try {
      const response = await axios.post(`${BaseApiURL}/api/citiesHotels`, {
        city: location.city,
        state: location.state,
      });
      if (response.status === 200) {
        setRooms(response.data);
      }
    } catch (e) {}
  };

  return (
    <View>
      <TouchableOpacity
        onPress={permissionGranted ? fetchCitiesHotels : _getLocationPermission}
        style={{
          backgroundColor: '#4CAF50',
          padding: 10,
          borderRadius: 5,
          marginVertical: 10,
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
          {permissionGranted
            ? `Best Rooms In ${location.city} ${location.state} `
            : 'Near By Search'}
        </Text>
      </TouchableOpacity>
      {rooms && (
        <RoomDetails
          isHomePage={true}
          setSelectedRooms={[]}
          RoomDetailsForPertcalHotel={rooms || []}
          noOFRoom={rooms?.length || 'Disclose'}
        />
      )}
    </View>
  );
};

export default SearchNearBy;
