import axios from 'axios';
export const url = "http://localhost:9999";
//获取最新消息
export function getNews() {
    return axios.get(`${url}/api/4/news/latest`).then((res) => {
        return res.data;
    }).catch((err) => {
        console.error(err)
    })
}
//获取文章分类列表
export function getTitles() {
    return axios.get(`${url}/api/4/themes`).then((res) => {
        return res.data;
    }).catch((err) => {
        console.error(err)
    })
}