
function User(id,name,age) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.enter = function(){
    return console.log("进入信隆行");
  }
}
module.exports = User;
