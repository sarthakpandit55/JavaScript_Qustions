// Question:-  Loop an array of objects and remove all objects which do not have gender's value male

arr = [
    {name: "Sarthak", gender: "male"},
    {name: "Satvik", gender: "male"},
    {name: "Riya", gender: "female"},
    {name: "sfhd", gender: "female"},
    {name: "Sarthak", gender: "male"},
    {name: "ljsdk", gender: "female"}
]

var array = arr.filter(function(ele){
    return ele.gender === "male"
})

arr = array

console.log(arr)