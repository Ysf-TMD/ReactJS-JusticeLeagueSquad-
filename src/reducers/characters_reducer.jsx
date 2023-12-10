import characters_json from "../data/characters.json";
import {ADD_CHARACTER, REMOVE_CHARACTER} from "../actions/index.jsx";
import createCharacter from "./helpers_reducer.jsx";

function characters (state  = characters_json , action ){
    switch (action.type){
        case ADD_CHARACTER :
            let characters = state.filter(item=>item.id !== action.id)
            return characters
        case REMOVE_CHARACTER :
            let char = [...state , createCharacter(action.id)]
            return char
        default :
            return state ;
    }
}
export default characters