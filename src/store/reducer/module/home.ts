
import { HEADER_1, HEADER_2, HEADER_3, GETSTORIES } from '../../actionTypes';

import { Store, defaultState } from '../../../model/util';

var defaultState:defaultState={
    stories:[],
    top_stories:[],
}

export default function reducerHome(state=defaultState,action:any):defaultState{
    switch(action.type){
        case GETSTORIES:
            return {
                ...state,
                stories:action.payload.stories,
                top_stories:action.payload.top_stories
            }
        default:
            return state
    }
    
}