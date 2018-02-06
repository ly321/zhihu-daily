import { GETSTORIES } from '../actionTypes';


import { fetchNews, fetchThemes, fetchThemeContent, fetchNewsContent } from '../../service/fetch';

export function getStories(){
    return (dispatch:any)=>{
        fetchNews().then((value:any)=>{
                let data=value
                dispatch({
                    type:GETSTORIES,
                    payload:{data}
                })
        })
    }
}
// export function get


