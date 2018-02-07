import { GETSTORIES, GETTHEMES, SIDEBAR_ACTIVE } from '../actionTypes';


import { fetchNews, fetchThemes, fetchThemeContent, fetchNewsContent } from '../../service/fetch';

//获取最新消息
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

//获取主题列表
export function getThemes(){
    return (dispatch:any)=>{
        fetchThemes().then((payload:any)=>{
            dispatch({
                type:GETTHEMES,
                payload
            })
        })
    }
}

//处理首页菜单点击事件
export function sidebarAcive(){
    return (dispatch:any)=>{
        dispatch({
            type:'SIDEBAR_ACTIVE',
            
        })
    }
}


