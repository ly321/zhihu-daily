import { GETSTORIES } from '../actionTypes';
import { NewsLatest, Theme, NewsContent, ThemeContent} from '../../model/util';

import { fetchNews, fetchThemes, fetchThemeContent, fetchNewsContent } from '../../service/fetch';

export function getStories(){
    return (dispatch:any)=>{
        fetchNews().then((value:NewsLatest)=>{
                let data=value
                dispatch({
                    type:GETSTORIES,
                    payload:{data}
                })
        })
    }
}
// export function get


