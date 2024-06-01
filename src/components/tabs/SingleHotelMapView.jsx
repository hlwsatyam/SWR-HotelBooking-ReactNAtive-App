// import { View } from "react-native";
// import React, { useEffect } from "react";

// import { WebView } from "react-native-webview";
// import MapView, { Marker } from "react-native-maps";
// const SingleHotelMapView = ({ map }) => {
//   // If latitude and longitude are already available in the map object, no need to parse it again
//   const { latitude, longitude } = map == "" ? map : JSON.parse(map);

//   const api = "AIzaSyDuDvpRsks8E4VD9g5QSPcE3leDvmy3xc0";
//   useEffect(() => {

//   });
//   const googleMapsUrl = `https://www.google.com/maps/embed/v1/view?key=${api}&center=${latitude},${longitude}&zoom=15`;

//   return (
//     <View style={{ width: "100%", height: 200 }}>
//       <WebView
//         style={{ flex: 1 }}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         source={{ uri: googleMapsUrl }}
//       />
//     </View>
//   );
// };
// export default SingleHotelMapView;
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapScreen = () => {
  // Coordinates for the initial map region
  const initialRegion = {
    latitude: 37.78825, // Sample latitude
    longitude: -122.4324, // Sample longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {/* Marker for the specified coordinates */}
        <Marker
          coordinate={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
          }}
          title={'Marker Title'}
          description={'Marker Description'}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
