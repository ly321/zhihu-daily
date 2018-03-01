const http = require("http");
const server = http.createServer();
const url = require("url");
const rp=require('request-promise');
const remoteUrl = "http://news-at.zhihu.com"

server.on('request', function(req, res) {
    var urlOption = url.parse(req.url);
    var pathName = urlOption.pathname;
    if (/^\/api/.test(pathName)) {
        proxyServer(remoteUrl+pathName,(data)=>{
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader('Content-Type','text/javascript;charset=UTF-8');
            res.end(data);
        })
    } else if (/\.(jpg|png)$/.test(pathName)) {
        const remoteImage = "pic1.zhimg.com";
        let headers = {
            "Referer": "https://daily.zhihu.com/"
        };
        let opt = {
            hostname: remoteImage,
            port: '80',
            path: pathName,
            headers: headers
        }
        let request = http.request(opt);
        request.on('response', function(response) {
            var c = "";
            response.setEncoding('binary');
            response.on('data', function(chunk) {
                c += chunk;
            });
            response.on('end', function() {
                res.writeHead(200, response.headers);
                res.write(c, "binary");
                res.end("");
            })
        });
        request.on("error", function(err) {
            console.error(err);
        })
        request.end();
    }
});
server.listen(8080, function() {
    console.log("server on port 8080");
});

function proxyServer(url,callback){
    rp(url).then(res=>{
        callback(res);
    })
}