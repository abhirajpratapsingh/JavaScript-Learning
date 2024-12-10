const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) ;

console.log ( marvel_heros ) ;
console.log ( marvel_heros[3] ) ;
console.log ( marvel_heros[3][2] ) ;

marvel_heros.pop() ;

console.log( marvel_heros ) ;

const allHeros = marvel_heros.concat(dc_heros) ;         // concat returns a new array 
console.log ( marvel_heros ) ;
console.log ( allHeros ) ;

const all_new_heros = [...marvel_heros, ...dc_heros] ;          // spread operator 
console.log ( all_new_heros ) ;

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5] ] ] 
const real_another_array = another_array.flat(Infinity) ;           // flat operation 

console.log ( real_another_array ) ;


console.log ( Array.isArray("Abhiraj" ) ) ;
console.log ( Array.from("abhiraj")) ;          // convert abhiraj into array 

let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log ( Array.of(score1,score2,score3) ) ;