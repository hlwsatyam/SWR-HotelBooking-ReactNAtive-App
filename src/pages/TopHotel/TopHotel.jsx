import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import PrevNavigation from '../../components/tabs/PrevNavigation';
import {useNavigation} from '@react-navigation/native';
import {Searchbar, TouchableRipple} from 'react-native-paper';
import SearchNearBy from '../../components/tabs/SearchNearBy';

const TopHotel = () => {
  const navigation = useNavigation();
  const [isFocued, setIsFocied] = React.useState(false);
  const [searchingText, setSearchingText] = React.useState('');
  return (
    <View className="flex-1 px-2 pt-10 bg-slate-600 ">
      <PrevNavigation navigation={useNavigation()} text={'Search Now'} />
      <Searchbar
        onChangeText={text => setSearchingText(text)}
        value={searchingText}
        onSubmitEditing={() => navigation.navigate('search', {searchingText})}
        onFocus={() => setIsFocied(true)}
        placeholder="Best Hotel In Noida"
        placeholderTextColor={'black'}
        style={{backgroundColor: '#fff', borderRadius: 10, marginTop: 20}}
      />
      <FitlerGrid />
      {isFocued ? (
        <SearchingAiHistory
          searchingText={searchingText}
          setSearchingText={setSearchingText}
        />
      ) : null}
    </View>
  );
};
export default TopHotel;
const FitlerGrid = () => {
  return (
    <View>
      <SearchNearBy />
    </View>
  );
};
const SearchingAiHistory = ({searchingText, setSearchingText}) => {
  const [queryList, setQueryList] = React.useState([
    'Best hotel in Noida',
    'Dream hotel in Amritsar',
    'Luxury hotels with spa in Mumbai',
    'Hotels near Central Park in New York',
    'Pet-friendly hotels in London',
    'Hotels with free breakfast in Paris',
    'Hotels with swimming pool in Dubai',
    'Hotels with beach view in Miami',
    'Hotels with rooftop bar in Bangkok',
    'Hotels with gym in Sydney',
    'Romantic hotels for couples in Venice',
    'Family-friendly hotels in Orlando',
    'Boutique hotels in Barcelona',
    'Eco-friendly hotels in Amsterdam',
    'Business hotels with conference rooms in Singapore',
    'Hotels with airport shuttle in Tokyo',
    'Hotels with in-room jacuzzi in Las Vegas',
    'Hotels with balcony in Santorini',
    'Hotels with ocean view in Maldives',
    'Hotels with mountain view in Interlaken',
    'Hotels with fireplace in Aspen',
    'Hotels with all-inclusive packages in Cancun',
    'Hotels with complimentary wine in Tuscany',
    'Hotels with 24-hour room service in Hong Kong',
    'Hotels with free Wi-Fi in Seoul',
    'Hotels with valet parking in Los Angeles',
    'Hotels with electric car charging stations in San Francisco',
    'Hotels with bicycle rental in Amsterdam',
    'Hotels with themed rooms in Tokyo Disneyland',
    'Hotels with honeymoon suites in Bora Bora',
    'Hotels with historical significance in Rome',
    'Hotels with celebrity chef restaurants in Las Vegas',
    'Hotels with live entertainment in Nashville',
    'Hotels with art galleries in Florence',
    'Hotels with movie theaters in Hollywood',
    'Hotels with karaoke rooms in Osaka',
    'Hotels with gaming consoles in rooms in Tokyo',
    'Hotels with cooking classes in Bangkok',
    'Hotels with wine tasting events in Napa Valley',
    'Hotels with private beach access in Malibu',
    'Hotels with horseback riding in Aspen',
    'Hotels with golf courses in Scotland',
    'Hotels with tennis courts in Wimbledon',
    'Hotels with indoor water parks in Wisconsin Dells',
    'Hotels with wildlife safari tours in South Africa',
    'Hotels with hot air balloon rides in Cappadocia',
    'Hotels with helicopter tours in Hawaii',
    'Hotels with zip line adventures in Costa Rica',
    'Hotels with snowmobile rentals in Lapland',
    'Hotels with ski-in/ski-out access in Whistler',
    // Add more hotel-related search queries here
  ]);

  // Function to filter query list based on searchingText
  const filteredList = queryList
    .filter(item => item.toLowerCase().includes(searchingText.toLowerCase()))
    .splice(0, 10);
  return (
    <ScrollView className="bg-slate-100 mt-3 rounded-lg p-2">
      <Text className="text-sm font-bold"> Results From Your Search </Text>
      {filteredList.map((item, idx) => (
        <TouchableOpacity
          onPress={() => setSearchingText(item)}
          key={idx}
          className="my-2">
          <Text> {item} </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
