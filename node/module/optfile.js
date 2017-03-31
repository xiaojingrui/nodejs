var  fs=  require('fs');
module.exports={
    readfile:function(path,recall){          //异步执行
        fs.readFile(path,  function  (err,  data)  {
            if  (err)  {
              console.log(err);
              recall("文件不存在");
            }else{
              //console.log(data.toString());
              recall(data);
            }
        });
        console.log("异步方法执行完毕");
    },
    readfileSync:function(path){      //同步读取
        var  data  =  fs.readFileSync(path,'utf-8');
        //console.log(data);
        console.log("同步方法执行完毕");
        return  data;
    }
}
