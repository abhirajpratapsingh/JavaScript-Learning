
// DATES

let myDate = new Date() 
console.log ( myDate ) ;    // it is not proper understandable 
console.log ( typeof myDate ) ;     // Object 
console.log ( myDate.toString() ) ;
console.log ( myDate.toDateString() ) ;
console.log ( myDate.toLocaleString() ) ;
console.log ( myDate.toISOString() ) ;
console.log ( myDate.toLocaleDateString() ) ;
console.log ( myDate.toTimeString() ) ;

// for declairing a Particular Date 
let myCreatedDate = new Date(2024,0,23) ;       // Months start from 0 in javascript
console.log ( myCreatedDate.toLocaleString() ) ;

let date1 = new Date(2002,2,13,9,50) ;  // 9 and 50 is time
console.log ( date1.toString() ) ;

let date2 = new Date("2002-03-13") ;
console.log ( date2.toDateString() ) ;

// TimeStamp
let myTimeStamp = Date.now() ;  
console.log ( myTimeStamp ) ;       // output is the mili-second value from 1st Jan 1970 (when date is introduced in javascript ) to now ;

console.log ( date1.getTime() ) ;       // mili second value

console.log ( Date.now() ) ;           // mili second value 

console.log ( Math.floor(Date.now()/1000) )     // convert milisecond value to second value 


console.log ( date1.getDate() ) ;
console.log ( date1.getDay() ) ;
console.log ( date1.getFullYear() ) ;
console.log ( date1.getHours() ) ;
console.log ( date1.getMonth() + 1 ) ;
console.log ( date1.getTime() ) ;
console.log ( date1.getTimezoneOffset() ) ;