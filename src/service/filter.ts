const url="http://localhost:8080";
import * as zurl from 'url';

//img跨域处理
export function imgFilter(value:any){
    if (!value) {
        return "";
    }
    var { path } = zurl.parse(value);
    return url + path;
}

//处理body中的img
export function body_ImgFilter(body:String){
    let x="<div class=\"main-wrap content-wrap\">\n<div class=\"headline\">\n\n\n<h1 class=\"headline-title onlyheading\">哪些电影有浓厚的建筑人文意味？</h1>\n\n\n\n\n</div>\n\n<div class=\"content-inner\">\n\n\n\n\n<div class=\"question\">\n<h2 class=\"question-title\"></h2>\n\n<div class=\"answer\">\n\n<div class=\"meta\">\n<img class=\"avatar\" src=\"http://pic1.zhimg.com/4ea348d28_is.jpg\">\n<span class=\"author\">歌者，</span><span class=\"bio\">一片素心 三分侠义</span>\n</div>\n\n<div class=\"content\">\n慎，多图。<br><br>本文基本按照建筑与影片关系从隐喻到现实来排序。对前文无感的同学请直接刷到后半部分。<br>----------------...";
        

}