import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import projectsReducer from "./projectsReducer";
import valuesReducer from "./valuesReducer";
import zenReducer from "./zenReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "loginReducer",
    "userReducer",
    "projectsReducer",
    "valuesReducer",
    "zenReducer"
  ]
};

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  projects: projectsReducer,
  values: valuesReducer,
  zen: zenReducer
});

export default persistReducer(persistConfig, rootReducer);
