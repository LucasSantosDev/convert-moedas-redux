// Combinando os reducers
import { combineReducers } from "redux";

import convert from "./convert";

const rootReducer = combineReducers({ convert: convert });

export default rootReducer;
