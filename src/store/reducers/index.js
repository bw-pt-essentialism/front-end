import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import projectsReducer from "./projectsReducer";
import valuesReducer from "./valuesReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducer", "userReducer", "projectsReducer", "valuesReducer"]
};

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  projects: projectsReducer,
  values: valuesReducer
});

export default persistReducer(persistConfig, rootReducer);
