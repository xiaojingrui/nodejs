

var  optfile  =  require('./module/optfile');

function  getRecall(req,res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    function  recall(data){
        res.write(data);
        res.end('');//不写则没有http协议尾
    }
    return  recall;
}
 module.exports={
    login:function(req,res){
      var recall  =  getRecall(req,res);
      optfile.readfile('./view/login.html',recall);
    },
    zhuce:function(req,res){
      var recall  =  getRecall(req,res);
      optfile.readfile('./view/zhuce.html',recall);
    },
    //静态资源
    static:function(req,res) {
      var staticFilePath = '.' + req.url;
      optfile.readfile(staticFilePath, function(data){
        res.end(data);
      });
    }
}
