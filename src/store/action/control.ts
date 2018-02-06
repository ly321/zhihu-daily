import { GETSTORIES } from '../actionTypes';


import { fetchNews, fetchThemes, fetchThemeContent, fetchNewsContent } from '../../service/fetch';

export function getStories(){
    return (dispatch:any)=>{
        fetchNews().then((payload:any)=>{
                dispatch({
                    type:GETSTORIES,
                    payload
                })
        })
    }
}
// export function get


