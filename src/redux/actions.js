import { ADD_CARD_SUCCESS } from "./constraints";

export const AddCardAction = (allAddedCardId) => {
  return {
    type: ADD_CARD_SUCCESS,
    allAddedCardId: allAddedCardId,
  };r
};
