import AsyncStorage from "@react-native-async-storage/async-storage";

const GetUserToken = async () => {
  try {
    const token = await AsyncStorage.getItem("guestToken");
    return token;
  } catch (error) {
    return null;
  }
};

export default GetUserToken;
