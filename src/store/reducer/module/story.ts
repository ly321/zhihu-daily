
import { GETSTORIES } from '../../actionTypes';

import { HomeState } from '../../../model/util';

var defaultState:HomeState={
    stories:[],
    top_stories:[],
}

export default function reducerStory(state=defaultState,action:any):HomeState{
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