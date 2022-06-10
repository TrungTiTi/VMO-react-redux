import { combineReducers } from "redux";
import count from './count';
import counter from './conter'

const rootReducer = combineReducers({
    count,
    counter
})

export default rootReducer;