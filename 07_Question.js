// Question: Write a function to reverse a number.


function reverse(num){
    return Number(num.toString().split("").reverse().join(""))
}

let val = 1234
console.log(reverse(val));


// method 2 :- 

function reverseed(num){
    var rev = 0
    while(num>0){
        rem = num % 10
        rev = rev*10 + rem
        num = Math.floor(num/10)
    }
    return rev
}

var number = 1234
console.log(reverseed(number))