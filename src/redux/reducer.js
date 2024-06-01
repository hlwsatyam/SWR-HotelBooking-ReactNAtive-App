 
import { ADD_CARD_SUCCESS } from "./constraints";
// Function to fetch initial state from AsyncStorage
export const AddingCardReducer =   (state = [], action) => {
  switch (action.type) {
    case ADD_CARD_SUCCESS:
      return action.allAddedCardId; // Update state with new data
    default:
      return state; // Return current state for other actions
  }
};
