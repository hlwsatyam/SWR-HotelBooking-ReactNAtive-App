import {FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {BaseApiURL} from '../SupportiveFunction/Variables';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const RoomDetails = ({
  noOFRoom,
  isHomePage,
  setSelectedRooms,
  RoomDetailsForPertcalHotel,
}) => {
  const [selectedRoom, setSelectedRoom] = useState([]);
  const onSelectedPress = roomID => {
    if (selectedRoom.includes(roomID)) {
      const rooms = selectedRoom.filter(room => room !== roomID);
      setSelectedRoom(rooms);
      setSelectedRooms(rooms);
    } else {
      const rooms = [roomID, ...selectedRoom];
      setSelectedRoom(rooms);
      setSelectedRooms(rooms);
    }
  };
  const navigation = useNavigation();
  function handlePress(item) {
    navigation.navigate('SingleHotelView', {hotelId: item.hotelId._id});
  }
  return (
    <View>
      {!isHomePage ? (
        <View style={styles.infoContainer}>
          <Text>No Of Room Available: {noOFRoom} </Text>
        </View>
      ) : null}

      {RoomDetailsForPertcalHotel && (
        <FlatList
          horizontal={true}
          data={RoomDetailsForPertcalHotel}
          keyExtractor={item => item?._id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={isHomePage ? () => handlePress(item) : null}
              style={[styles.card, styles.elevation]}>
              <View>
                <Text style={styles.heading}>
                  Room No:{item.roomNo} [ {item.roomType} ]
                </Text>
              </View>
              {item?.imageUrls && item?.imageUrls.length > 0 && (
                <Image
                  className="h-[100px] rounded w-[100%]"
                  source={{
                    uri: item?.imageUrls[0]
                      ? `${BaseApiURL}/uploads/${item.imageUrls[0]}`
                      : 'https://www.rwsentosa.com/-/jssmedia/project/non-gaming/rwsentosa/hotels/hotel-ora/room-type/deluxe-pool-view/hotel-ora-deluxe-pool-view-750-x-422.jpg?rev=c36d7c768d1f41898af5db9244e16824&sc_lang=en&extension=webp',
                  }}
                />
              )}
              <Text className="text-[12px] mt-1">Price:{item.roomPrice}</Text>
              <Text className="text-[12px] my-2">{item.roomDescription}</Text>
              <View className="flex-row  gap-y-3  flex-wrap space-x-3 ">
                {item.selectedFacilities.slice(0, 15).map((facilities, idx) => (
                  <Text
                    className="text-[10px] rounded bg-green-400/20 px-2 py-1 font-bold text-[#000000]"
                    key={idx}>
                    {facilities}
                  </Text>
                ))}
                {!isHomePage && (
                  <TouchableOpacity
                    onPress={() => onSelectedPress(item._id)}
                    className={
                      selectedRoom.includes(item._id)
                        ? 'bg-red-500   w-full px-2 py-1 rounded-full'
                        : 'bg-green-500  w-full px-2 py-1 rounded-full'
                    }>
                    {selectedRoom.includes(item._id) ? (
                      <Text className="text-center text-[11px]  text-white ">
                        Remove
                      </Text>
                    ) : (
                      <Text className="text-center text-[11px] text-white ">
                        Select Room
                      </Text>
                    )}
                  </TouchableOpacity>
                )}
                {isHomePage ? (
                  <View className="mt-1 border-t-[0.7px] border-gray-300">
                    <Text className="font-bold">
                      {item?.hotelId?.hotelName}{' '}
                    </Text>
                    <Text className="font-bold text-[9px] ">
                      {item?.hotelId?.city} {item?.hotelId?.state}{' '}
                      {item?.hotelId?.country}
                    </Text>
                  </View>
                ) : null}
              </View>
              <FlatList />
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  // Your existing styles
  infoContainer: {
    backgroundColor: 'rgba(0, 255, 0, 0.2)',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,

    paddingVertical: 4,
    paddingHorizontal: 25,
    width: 290,

    marginHorizontal: 10,
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});

export default RoomDetails;
