import { GETTHEMES } from '../../actionTypes';

import { SidebarState } from '../../../model/util';

var defaultState:SidebarState={
    sidebarList:[],
}
export default function reducerSidebar(state=defaultState,action:any):SidebarState{
    switch(action.type){
        case GETTHEMES:
            return {
                ...state,
                sidebarList:action.payload.others
            }
        default:
            return state
    }
    
}