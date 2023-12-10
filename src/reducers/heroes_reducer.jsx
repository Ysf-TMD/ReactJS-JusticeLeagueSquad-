import {ADD_CHARACTER, REMOVE_CHARACTER} from "../actions/index.jsx";
import createCharacter from "./helpers_reducer.jsx";

function  heroes (state = [] , action){
    switch (action.type){
        case ADD_CHARACTER :
            let heroes = [...state , createCharacter(action.id)]
            return heroes
        case REMOVE_CHARACTER :
            let hero = state.filter(item =>item.id !== action.id)
            return hero
        default :
            return state ;
    }
}


export default heroes