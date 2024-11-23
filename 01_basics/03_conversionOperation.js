let score = "33" 
console.log ( typeof score ) ;      // datatype => string

let valueInNumber = Number(score) ;     // convert into number datatype
console.log ( typeof valueInNumber ) ;

score = "33abc"         // datatype => string 
valueInNumber = Number(score) ;       // convert into number 
console.log( typeof valueInNumber ) ;       // DataType => number 
console.log ( valueInNumber ) ;             // NaN => Not a Number 


score = null ;              // datatype => NULL
valueInNumber = Number(score) ;     // convert into number
console.log ( valueInNumber ) ;     // valueInNumber = 0 

let isLoggedIn = 1              // datatype => Number 
let booleanIsLoggedIn = Boolean(isLoggedIn) ;       // convert into boolean datatype
console.log ( booleanIsLoggedIn ) ;       // true 

isLoggedIn = ""                 // empty string
booleanIsLoggedIn = Boolean(isLoggedIn) ;           // convert into boolean datatype
console.log( booleanIsLoggedIn ) ;          // false 


let someNumber = 33             // DataType => Number 
let stringNumber = String(someNumber) ;         // convert into string
console.log ( stringNumber ) ;              // output => 33
console.log ( typeof stringNumber ) ;       // converted into string 
// Notes 

/*
convert into number using Number() method
"33" => 33 
"33abc" => NaN
true => 1 
false => 0

covert into boolean using Boolean() method
1 => true 
0 => false 
"" => false 
"Abhiraj" => true 
*/

