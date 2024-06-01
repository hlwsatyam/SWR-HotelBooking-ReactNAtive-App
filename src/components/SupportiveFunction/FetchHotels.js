import axios from "axios";
import { BaseApiURL } from "./Variables";

const FetchHotels = async (qr) => {
  try {
    const response = await axios.post(
      `${BaseApiURL}/api/searchingHotel?query=${qr}`
    );
    if (response.status === 200) {
      return response.data; // Return the data received from the API
    } else {
      return []; // Return an empty array if the response status is not 200
    }
  } catch (error) { 
    console.log(error);
    return []; // Return an empty array in case of any errors
  }
};

export default FetchHotels;
