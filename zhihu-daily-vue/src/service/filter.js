import { url } from './http'
const zurl = require("url");
//图片filter
export default function imageFilter(value) {
    if (!value) {
        return "";
    }
    var { path } = zurl.parse(value);
    return url + path;
}