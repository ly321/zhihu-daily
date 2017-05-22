import axios from 'axios';
export const url = "http://localhost:9999";
export function getNews() {
    return axios.get(`${url}/api/4/news/latest`).then((res) => {
        return res.data;
    }).catch((err) => {
        console.error(err)
    })
}