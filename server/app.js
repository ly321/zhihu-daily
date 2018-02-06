const http=require('http');
const url=require('url');
const rp=require('request-promise');

const remoteUrl="http://news-at.zhihu.com/api/4";

const server=http.createServer();

server.on('request',(req,res)=>{
    var pathName=url.parse(req.url).pathname;
    proxyServer(remoteUrl+pathName,(data)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type','text/javascript;charset=UTF-8');
        res.end(data);
    })
}).listen(8080);
function proxyServer(url,callback){
    rp(url).then(res=>{
        callback(res);
    })
}