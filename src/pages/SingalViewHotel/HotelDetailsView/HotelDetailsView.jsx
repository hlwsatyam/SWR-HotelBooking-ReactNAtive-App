import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
const HotelDetailsView = ({HotelData, isFacilities, title}) => {
  const [iconList, setIconList] = useState({
    'Hair Dryer': 'https://img.icons8.com/ios/50/hair-dryer.png',
    'Free Breakfast':
      'https://img.icons8.com/material-outlined/24/hot-breakfast.png',
    Laundry: 'https://img.icons8.com/ios/50/laundry-bag.png',
    Parking: 'https://img.icons8.com/pastel-glyph/64/parking--v1.png',
    'Air Conditioning': 'https://img.icons8.com/ios/50/air-conditioner.png',
    'Mountain View': 'https://img.icons8.com/color/48/mountain.png',
    'Room Service': 'https://img.icons8.com/windows/32/room-service.png',
    'Accessible Rooms': 'https://img.icons8.com/ios/50/room.png',
    'Emergency Exit': 'https://img.icons8.com/ios/50/siren.png',
    elvator: 'https://img.icons8.com/ios/50/elevator.png',
    elevator: 'https://img.icons8.com/ios/50/elevator.png',
    Spa: 'https://img.icons8.com/ios/50/spa.png',
    Beachfront: 'https://img.icons8.com/ios/50/beach.png',
    'Banquet Hall':
      'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-hall-building-tanah-basah-basic-outline-tanah-basah.png',
    'Tennis Courts': 'https://img.icons8.com/color/48/tennis-2.png',
    Concierge: 'https://img.icons8.com/ios/50/front-desk.png',
    'Airport Shuttle': 'https://img.icons8.com/color/48/bus2.png',
    Fireplace: 'https://img.icons8.com/ios/50/fireplace.png',
    Kitchen: 'https://img.icons8.com/ios-filled/50/kitchen.png',
    Hotel: 'https://img.icons8.com/emoji/48/hotel-emoji.png',
    Bedrooms:
      'https://img.icons8.com/external-justicon-lineal-justicon/64/external-bedroom-hotel-essentials-justicon-lineal-justicon.png',
    TV: 'https://img.icons8.com/fluency/48/tv.png',
    Balcony: 'https://img.icons8.com/ios/50/balcony.png',
    Bathrooms: 'https://img.icons8.com/ios/50/wc.png',
    Garden:
      'https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-garden-lifestyles-flaticons-flat-flat-icons-2.png',
    'Ocean View': 'https://img.icons8.com/ios/50/ocean-wave.png',
    'Work Desk': 'https://img.icons8.com/ios-filled/50/desk.png',
    'Iron & Ironing Board':
      'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-iron-board-back-to-school-flaticons-lineal-color-flat-icons.png',
    'Pet-Friendly Rooms': 'https://img.icons8.com/color/48/pet.png',
    'In-Room Safe': 'https://img.icons8.com/ios/50/safe.png',
    'Luggage Storage': 'https://img.icons8.com/emoji/48/luggage-emoji.png',
    'Mini-Bar': 'https://img.icons8.com/ios/50/mini-bar.png',
    'Sofa Bed': 'https://img.icons8.com/ios-filled/50/sofa.png',
    'Spa Bath': 'https://img.icons8.com/ios/50/spa.png',
    'Separate Living Room':
      'https://img.icons8.com/material-rounded/24/living-room.png',
    'Connecting Rooms':
      'https://img.icons8.com/ios/50/computers-connecting.png',
    'Accessible Room': 'https://img.icons8.com/ios/50/good-pincode.png',
    'Fire Extinguisher': 'https://img.icons8.com/ios/50/fire-extinguisher.png',
    'Smoke Detector': 'https://img.icons8.com/ios/50/smoke-detector.png',
    'Baby Crib': 'https://img.icons8.com/ios/50/baby--v1.png',
    'Swimming Pool': 'https://img.icons8.com/ios/50/swimming-pool.png',
    wifi: 'https://img.icons8.com/ios/50/wifi-logo.png',
    Restaurant: 'https://img.icons8.com/ios/50/restaurant.png',
    'Meeting Room': 'https://img.icons8.com/ios/50/meeting-room.png',
    'Fitness Center': 'https://img.icons8.com/ios/50/meeting-room.png',
    '24-hours Open': 'https://img.icons8.com/color/48/24-circle.png',
    Bar: 'https://img.icons8.com/ios-glyphs/30/bar-counter.png',
    'Laundry Service':
      'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-laundry-service-hotel-management-flaticons-lineal-color-flat-icons.png',
    'Business Center':
      'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-business-center-museum-flaticons-lineal-color-flat-icons-3.png',
    'Kids Club': 'https://img.icons8.com/ios-filled/50/diners-club.png',
    Jacuzzi: 'https://img.icons8.com/ios/50/jacuzzi.png',
    Gym: 'https://img.icons8.com/ios/50/gum-.png',
    Sauna: 'https://img.icons8.com/ios/50/sauna.png',
    'Room Cleaning': 'https://img.icons8.com/ios/50/cleaning-a-surface.png',
    Library: 'https://img.icons8.com/ios/50/library.png',
    'Gift Shop':
      'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-gift-shop-baseball-flaticons-lineal-color-flat-icons.png',
    Karaoke: 'https://img.icons8.com/ios/50/concert.png',
    'Snack Bar': 'https://img.icons8.com/ios/50/chocolate-bar--v1.png',
    'Tour Desk': 'https://img.icons8.com/color/48/scandinavian-desk.png',
    'ATM/Cash Machine': 'https://img.icons8.com/emoji/48/atm-sign-emoji.png',
    'BBQ Facilities': 'https://img.icons8.com/windows/32/bbq-new.png',
    'Currency Exchange': 'https://img.icons8.com/ios/50/currency-exchange.png',
  });

  return (
    <View className="mt-5 mx-2 bg-emerald-400/40 rounded-lg p-2">
      <Text className="text-xl px-2 font-bold text-black "> {title}</Text>
      <View className="flex-row flex-wrap gap-x-3  gap-y-3  my-2">
        {isFacilities
          ? HotelData.Details.map((item, idx) => (
              <View key={Date() + idx * 32}>
                <Image
                  className="w-[26px] m-auto h-[26px] "
                  source={{uri: iconList[item]}}
                />
                <Text className="text-[9px] text-black font-bold text-center">
                  {item}
                </Text>
              </View>
            ))
          : HotelData.Facilities.map((item, idx) => (
              <View key={Date() + idx * 32}>
                <Image
                  className="w-[26px] m-auto h-[26px] "
                  source={{uri: iconList[item]}}
                />
                <Text className="text-[9px] text-black font-bold text-center">
                  {item}
                </Text>
              </View>
            ))}
      </View>
    </View>
  );
};
export default HotelDetailsView;
