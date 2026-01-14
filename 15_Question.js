// Question:- Write a function to clone an array.


function clone(arr){
    return [...arr]
}

console.log(clone([1,2,3,4,5]))


// methord 2:-

function clone2(arr){
    var newarr = []
    arr.forEach(function(ele){
        newarr.push(ele)
    })
    return newarr
}

var newarr = clone2([23,4,5,1,5,6])
console.log(newarr);
