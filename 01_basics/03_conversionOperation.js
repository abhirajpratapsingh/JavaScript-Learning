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


//********************************  Operations  **************************************************** */

let value = 3 
let negValue = -value ;
console.log ( negValue ) ;

console.log ( 2+2 ) ;   // addition
console.log ( 2-2 ) ;   // subtraction
console.log ( 2*3 ) ;   // multiply
console.log ( 2**3 ) ;  // power 2 to the power 3
console.log ( 5/2 ) ;   // division
console.log ( 3%2 ) ;   // it gives remainder 

let str1 = "hello " ;
let str2 = "abhiraj" ;
let str3 = str1 + str2 ;    // string concatination
console.log( str3 ) ;

console.log( "1" + 2 )    // 12
console.log( 1 + "2" )      // 12
console.log( "1" + 2 + 2 )      // 122
console.log( 1 + 2 + "2" )      // 32

console.log ( true ) ;      // true 
console.log ( +true )       // 1 
// console.log ( true+ )       // Error
console.log( +"" )      // 0

let num1 , num2, num3 
num1 = num2 = num3 = 2 + 2 
console.table ( [num1,num2,num3] ) ;

let gameCounter = 100 
gameCounter++       // 101 
++gameCounter       // 102 