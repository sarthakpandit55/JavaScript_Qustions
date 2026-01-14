// Question:- Write a function to loop an array and write all members of it.


let arr = [1,2,3,4,5,6,7]

function output(arr){
    sum = 0
    arr.map(function(ele){
        sum = sum+ele
    })
    return sum
}

console.log(output(arr))