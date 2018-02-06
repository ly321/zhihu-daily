import 'whatwg-fetch';
import * as Promise from 'promise';
const remoteUrl = "http://news-at.zhihu.com/api/4";

//获取最新消息
export function fetchNews() {
    return new Promise(function (resolve, reject) {
        fetch(remoteUrl + '/news/latest')
            .then(res => resolve(res)).catch(err => reject(err));
    })
}

//获取主题列表
export function fetchThemes() {
    return new Promise((resolve, reject) => {
        fetch(remoteUrl + '/themes')
            .then(res => resolve(res)).catch(err => reject(err));
    });
}

//获取主题内容
export function fetchThemeContent(id:String){
    return new Promise((resolve,reject)=>{
        fetch(remoteUrl+'/theme/'+id)
            .then(res => resolve(res)).catch(err => reject(err));
    });
}

//获取页面内容
export function fetchNewsContent(id:String) {
    return new Promise((resolve, reject) => {
        fetchNewsContent(remoteUrl + '/news/' + id)
            .then(res => resolve(res)).catch(err => reject(err));
    });
}
