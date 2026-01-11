// Question: Write a function that reverses a given string.


// method 1 :- using split(), reverse(), and join()

function reversestring(str){
    return str.split('').reverse().join('');
}

str = "Hello"

console.log(reversestring(str))

// method 2 :- using for for loop

function reverseString(string){
    let reversed = " "
    for(let i = string.length-1; i>=0; i--){
        reversed +=string[i]
        console.log(i);
        
    }
    return reversed
}

string = "Hello"

console.log(reverseString(string));
