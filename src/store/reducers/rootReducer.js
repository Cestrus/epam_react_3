import { combineReducers } from "redux";
import { appReducer } from './appReducer.js';
import { reducer as formReducer } from "redux-form";


export const rootReducer = combineReducers({
	appReducer,
	formReducer,
})

