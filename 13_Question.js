// Question:- I an array of numbers and strings, only add those members which are not strings.


let arr = [3, "huuiiihuii", 7, 4, "ufw", "kuhoq", "kehfuwijs", 8, 3]
var sum = 0

arr.forEach(function (ele){
    if(typeof ele  == "number"){
        sum += ele
    }
})
console.log(sum)