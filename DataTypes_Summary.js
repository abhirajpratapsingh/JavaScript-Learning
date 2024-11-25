/*

There are two type of DataTypes in Javascript
1-> Primitive
2-> Non Primitive

Primitive DataTypes => These Datatypes are call by value datatype , it means when we are copy these datatypes then we get the copy of the data ( not reference or address of the memory ) , and hm jo bhi changes krte h vo copy vale data me changes hote h original me ni hota hai , for expamle jb hm function ke argument me variable bnate h C language me .
There are 7 type Primitive datatypes .
7 Types :=> String , Number , Boolean , Null , undefined , Symbol , BigInt 

Non Primitive Datatypes ( Reference Datatypes ) => Array , Objects , Functions


JavaScript is Dynamically typed language ( Kyuki hm isme variable bnate h or uska type define ni krte h C language ki trh ) 


*/

// how to define symbol
const id = Symbol('123') ;
const anotherId = Symbol('123')
console.log ( id === anotherId ) ; // both value are same '123' but symbol gives always unique output

// BigInt 
const num = 293539875937389n ;      // Last n represent that it is bigInt number

const heros = ["shaktiman","naagraj","doga"]        // it is Array

let myObj = {
    name : "Abhiraj",
    age : 23
}               // it is Object 

const myFunction = function(){
    console.log ("hello World") ;
}