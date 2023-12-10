import {combineReducers} from "redux";
import characters from "./characters_reducer.jsx";
import heroes from "./heroes_reducer.jsx";

// setUp reducer
 const  rootReducer = combineReducers(
    {
        characters ,
        heroes
    }
)
export default rootReducer