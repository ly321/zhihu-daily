import { GETNEWSCONTENT} from '../../actionTypes';

import { ContentState } from '../../../model/util';

var defaultState:ContentState={
    body:'',
    image_source:'',
    title:'',
    image:'',
    share_url:'',
    images:[],
    css:[],
}

export default function  reducerContent(state=defaultState,action:any):ContentState {
    switch(action.type){
        case GETNEWSCONTENT:
            return {
                ...state,
                body:action.payload.body,
                image_source:action.payload.image_source,
                title:action.payload.title,
                image:action.payload.image,
                share_url:action.payload.share_url,
                images:action.payload.images,
                css:action.payload.css,
            }
        default:
            return state
    }
}


