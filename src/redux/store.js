import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Import Redux Thunk
import { AddingCardReducer } from "./reducer";

const rootReducer = combineReducers({
  CardDetails: AddingCardReducer,
});

// Apply Redux Thunk middleware when creating the store
export const Store = createStore(rootReducer);
