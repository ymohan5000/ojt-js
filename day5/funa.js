//fun declaration
function ram(a,b,c){
    return a*b*c;
}
console.log(ram(23,23,23))
//arrow fun
const sum=(a,b,c)=>{
    return a+b+c;
}
console.log(sum(23,2343,232))
//anonymas
setTimeout (function()
{

    console.log("ren is 2 second")
},200)

//fun expression

const ram1=function(){
    console.log("hello rma")
}
ram1();

