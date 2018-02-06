import 'whatwg-fetch';
import * as Promise from 'promise';
const remoteUrl = "http://localhost:8080";

//获取最新消息
export function fetchNews() {
    return new Promise(function (resolve, reject) {
        fetch(remoteUrl + '/news/latest')
            .then((res:any)=> { 
                resolve(res)
             }).catch((err:any)=> reject(err));
    })
}

//获取主题列表
export function fetchThemes() {
    return new Promise((resolve, reject) => {
        fetch(remoteUrl + '/themes')
            .then((res:any)=> resolve(res)).catch((err:any) => reject(err));
    });
}

//获取主题内容
export function fetchThemeContent(id: String) {
    return new Promise((resolve, reject) => {
        fetch(remoteUrl + '/theme/' + id)
        .then((res:any)=> resolve(res)).catch((err:any) => reject(err));
    });
}

//获取页面内容
export function fetchNewsContent(id: String) {
    return new Promise((resolve, reject) => {
        fetchNewsContent(remoteUrl + '/news/' + id)
        .then((res:any)=> resolve(res)).catch((err:any) => reject(err));
    });
}
