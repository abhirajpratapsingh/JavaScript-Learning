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


//+++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++

// Stack memory ( primitive ) sare primitive datatype ko stack me memory milti , yaani ki jo bhi hm variable pass krte h uska data copy hota h , or hm bhi hm value me changes krte h to copy vale me changes hote h original vale me nii 

// Heap Memory ( Non-Primitive ) sare non-primitive datatype ko heap me memory milti hai , yaani ki jo bhi hm variable dete hai uska reference pass hota yani ki address or jb hm usme change krte h to original value bhi change ho jati h

// Example of stack memory 
let myname = "abhiraj"  // isko memory stack me mili h
let newName = myname // isko bhi memory stack me mili h isme koi changes krege to myname me koi changes ni hoge
newName = "abhiraj Pratap Singh"    // hmne iski value change kr di lekin myname me abhi bhi value vhi rhegi

// Example of heap memory 
let user = {   // isko memory heap me mili h to ab iska reference pass hoga
    name : "abhiraj" ,
    age : 23 
}
let user1 = user ;    // ab isme user ka reference aaya h to ab agr hm user1 me changes krege to user me bhi change ho jayega
user1.age = 234 
console.log ( user.age , user1.age ) ;