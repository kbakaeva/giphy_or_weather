import {FETCH_GIPHY} from '../actions';

export default function (state=[],action){
    switch(action.type){
        case FETCH_GIPHY:
            return[action.payload.data.data]
    }
    return state
}

//управлять состоянием