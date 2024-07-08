import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainContentReducer from "./MainContentReducer";
import dialogsReducer from "./DialogsReducer";
// import sideBarReducer from "./SideBarReucer";
import UsersReducer from "./UsersReducer"




const reducers = combineReducers({
  mainContent: mainContentReducer,
  dialogs: dialogsReducer,
  // sideBar: sideBarReducer
  users : UsersReducer
});

let store = configureStore({
  reducer: reducers
});


 

export default store;