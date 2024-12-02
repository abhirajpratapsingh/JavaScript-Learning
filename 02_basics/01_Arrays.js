

/*
Array 

1:  Array is the collection of multiple items under a single variable.
    values can be diffent type 
2:  Arrays in JavaScript are resizable and it can contain a mix of different data types.
3:  Arrays have 0 based indexing
4:  whenever we copy any array then it creates a shallow copy
*/
const myArr = [0, 1, 2, 3, 4, 5, true, "Abhiraj"]
console.log ( myArr ) ;
console.log ( typeof myArr ) ;      // Object 

const myArr2 = new Array ( 1 , 2 ,3 ,9 , 7 ) ;
console.log ( myArr2.length ) ;
console.log ( myArr2[2] ) ;
console.log ( myArr2[4] ) ;

myArr2.push(6) ;        // value add in array last index
myArr2.push(5) ;

myArr2.pop() ;      // remove last value of the array 

myArr2.unshift(9) ;      // value add at the starting index of the array 

myArr2.shift() ;    // non parameterized method , it remove the first index value

console.log ( myArr2.indexOf(3) ) ;

console.log ( myArr2.includes(4) ) ;

console.log ( myArr.join('-') ) ;   // return string type

console.log ( myArr.slice(1,4) ) ;

console.log ( myArr.splice(1,4)) ;      // splice change original array 

console.log (myArr2)