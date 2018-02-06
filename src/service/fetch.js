const rp=require('request-promise');
// import * as Promise from 'promise';
const remoteUrl = "http://localhost:8080";

//获取最新消息
export function fetchNews() {
    return new Promise(function (resolve, reject) {
        rp(remoteUrl + '/news/latest')
            .then(res=> { 
                resolve(res)
             }).catch(err=> reject(err));
    })
}

//获取主题列表
export function fetchThemes() {
    return new Promise((resolve, reject) => {
        rp(remoteUrl + '/themes')
            .then(res=> resolve(res)).catch(err => reject(err));
    });
}

//获取主题内容
export function fetchThemeContent(id) {
    return new Promise((resolve, reject) => {
        rp(remoteUrl + '/theme/' + id)
        .then(res=> resolve(res)).catch(err => reject(err));
    });
}

//获取页面内容
export function fetchNewsContent(id) {
    return new Promise((resolve, reject) => {
        rp(remoteUrl + '/news/' + id)
        .then(res=> resolve(res)).catch(err => reject(err));
    });
}
