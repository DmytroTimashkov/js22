'use strict'
function myBind(fun,thisObj,...rest) {
  const arg = rest
  const newFun = fun.call(thisObj,arg)
  return newFun
}


function ex(){
  console.log(this);
}
const a = {
  name:'Dima',
  age:17
}
ex()
myBind(ex,a)
