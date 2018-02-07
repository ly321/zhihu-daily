import { GETTHEMES, SIDEBAR_ACTIVE } from '../../actionTypes';

import { SidebarState } from '../../../model/util';


var defaultState:SidebarState={
    sidebarList:[],
    sidebarActive:false,
}
export default function reducerSidebar(state=defaultState,action:any):SidebarState{
    switch(action.type){
        case GETTHEMES:
            return {
                ...state,
                sidebarList:action.payload.others,
            }
        case SIDEBAR_ACTIVE:
            return {
                ...state,
                sidebarActive:!state.sidebarActive,
            }
        default:
            return state
    }
    
}