import AsyncStorage from "@react-native-async-storage/async-storage";

const FetLocalUserData = async () => {
  const data = JSON.parse(await AsyncStorage.getItem("userData"));

  return {
    nickname: data.nickname,
    name: data.name,
  };
};

export default FetLocalUserData;
