import { GETTHEMECONTENT } from '../../actionTypes';

import { ThemeState } from '../../../model/util'

var defaultState:ThemeState={
    stories:[]
}

export default function reducerTheme(state=defaultState,action:any):ThemeState{
    switch(action.type){
        case GETTHEMECONTENT:
            return {
                ...state,
                stories:action.payload.stories,
            }
        default:
            return state
    }
}