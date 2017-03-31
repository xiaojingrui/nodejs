var http = require('http');
var url = require('url');
var router = require('./router');
//var exception = require('./module/Exception');
http.createServer(function (request, response) {
	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	//response.writeHead(200, {'Content-Type': 'text/html'});
	if(request.url !=="/favicon.ico"){  //清除第2此访问
		var pathname = url.parse(request.url).pathname;
    var pathname  =  pathname.replace(/\//,'');//替换掉前面的/

		try{
			if(request.url.startsWith("/static")) {
				router["static"](request,response);
			}else{
				router[pathname](request,response);
			}
			// data = exception.expfun(0); //异常抛出
			// response.write(d ata);
			//response.end('');
		}catch(err){
			console.log("222");

			response.write("404错误");
			response.end('');
		}
		// var teacher = new Teacher(1,"lisi",30);
		// teacher.teach(response);
	}
}) .listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
