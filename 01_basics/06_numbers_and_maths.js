const score = 400 ;     // javascript automatic decide that it is number ( implicit )
console.log ( typeof score ) ;      // number 

const balance = new Number(100)   // (explicit) it is number
console.log ( typeof balance ) ;        // Object 
console.log ( balance ) ;               // [Number: 100]

console.log ( balance.toString() ) ;        // to convert into string
console.log ( balance.toFixed(2) ) ;        // 100.00 for precision value ( after point howmuch digit you want )

const otherNumber = 23.8966 ;
console.log ( otherNumber.toPrecision(3) ) ; // 23.9 
// it returns string value 

const hundreds = 100000000 ;
console.log ( hundreds.toExponential() ) ;      // 1e+8
console.log ( hundreds.toLocaleString() ) ;     // 100,000,000

console.log ( Number.MAX_SAFE_INTEGER)
console.log ( Number.MIN_SAFE_INTEGER)
console.log ( Number.MAX_VALUE)
console.log ( Number.MIN_VALUE)


//+++++++++++++++++++++     MATHS   +++++++++++++++++++++++++++

console.log ( Math ) ;      // Object type
console.log ( Math.abs(-4) ) ;      // 4
console.log ( Math.round(4.3) )       // 4 
console.log ( Math.round(4.6) )         // 5 
console.log ( Math.ceil(4.2) )          // 5
console.log ( Math.round(4.9) )         // 4 
console.log ( Math.pow(4,3) )           // 64
console.log ( Math.sqrt(16) )           // 4

console.log ( Math.random() )       // always gives value between 0 to 1 ( every time it gives different value )
console.log ( Math.round( (Math.random()*10) + 1) ) 

const min = 10 
const max = 20 

console.log (Math.floor(Math.random() * (max-min + 1 )) + min )