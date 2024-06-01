import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const CityHomeList = ({navigation}) => {
  const [cityList, setCityList] = useState([
    {
      label: 'Noida',
      imgUrl:
        'https://image.tricitytoday.com/thumb/845x545/noida-expressway-68381_4.jpg',
    },
    {
      label: 'Gurugram',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7JMa4TfWvOF9I1AoG0Ub3h1Ct8su6yhGxHEIvDx5KQ&s',
    },
    {
      label: 'Patna',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgJlhN3ouy874iwmFSoBYmqL6YhF0n-2hJVOu8W_6_w&s',
    },
    {
      label: 'Mumbai',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROq2hg0utPXf55DRIPAM8qSeIWCabj1xL-_jiPCSmQEw&s',
    },
    {
      label: 'Amritsar',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAa-Oj7OPrmLab1xjVEXb6ohr-scXYb7ZnWMF7AcBVTg&s',
    },
  ]);
  return (
    <View className="mt-2 p-2">
      <Text className="text-left">Best Place</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {cityList.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('search', {searchingText: item.label})
            }
            key={index}
            style={{margin: 10}}>
            <Image
              source={{uri: item.imgUrl}}
              className="w-[100px] h-[100px] rounded-full "
            />
            <Text className="text-center mt-2 ">{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CityHomeList;
