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
//获取文章分类列表具体内容
export function getTitlesOne(id) {
    return axios.get(`${url}/api/4/theme/${id}`).then((res) => {
        res.data.stories.map((item) => {
            if (!item.hasOwnProperty("images")) {
                item.images = "http://7xkj1z.com1.z0.glb.clouddn.com/head.jpg"
            } else {
                item.images = item.images[0]
            }
            return item;
        })
        return res.data;
    }).catch((err) => {
        console.error(err)
    })
}
//获取文章详细内容
export function getArticle(id) {
    return axios.get(`${url}/api/4/news/${id}`).then((res) => {
        res.data.body = res.data.body.replace(/htt(ps|p):\/\/pic[0-9]\.zhimg\.com/g, url);
        return res.data;
    })
}