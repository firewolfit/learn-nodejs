var http = require("http")
// 创一个监听在8888的服务端口
http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("welcome !!!") // 响应请求
}).listen(8888)
console.log("server is listenning on 8888 .....")