const url="http://localhost:8080";
import * as zurl from 'url';
import { JSDOM }  from 'jsdom';

//img跨域处理
export function imgFilter(value:any){
    if (!value) {
        return "";
    }
    var { path } = zurl.parse(value);
    return url + path;
}

//处理body中的img
export function body_ImgFilter(body:any){
    var dom=new JSDOM(body),
        arr=Array.from(dom.window.document.querySelectorAll('img'));
    arr.map(item=>item.src=imgFilter(item.src));
    var str=dom.serialize();
    return str.slice(25,str.length-14);
}