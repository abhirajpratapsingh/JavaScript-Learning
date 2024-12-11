/* there are two method to declair an object 
1- with the literal
2- with the constructor


singleton => Jb bhi object constructor se bnta h to singleton bnta h, ( yaani ki ye apni trh ka ek hi object h )
ex =>  Object.create

Object literals => this is the type of declairing an object
( isme singleton ni bnta h )
ex => const JsUser = {} 
*/

const mySym = Symbol("key1") ;          // Symbol

const JsUser = {                // literal
    name: "abhiraj",
    "full name": "Abhiraj Pratap Singh",        // you cannot access this type using dot(.)
    age: 22,
    location: "Kanpur",
    email: "abhirajpratapsingh13@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "key1" 
} 
console.log ( JsUser.location ) ;
console.log ( JsUser["location"]) ;

console.log ( JsUser["full name"] ) ;
console.log ( JsUser.mySym) ;

console.log ( typeof JsUser.mySym ) ;       // it is not using symbol type is string 

// if you want to use this thing like symbol then the syntax is => using [] in the object (mySym:"key1" to [mySym]:"key1")

console.log ( JsUser[mySym] ) ;
console.log ( typeof JsUser[mySym] ) ;

JsUser.age = 23 ;           // value update

// if you want that no one can change the value then we can freeze value

console.log ( JsUser ) ;        // age is 23 
JsUser.age = 22 ;
console.log ( JsUser ) ;        // age = 22

// Object.freeze(JsUser) ;         // object freeze
// JsUser.age = 23 ;
// console.log ( JsUser ) ;        // age is still 22 

JsUser.greeting = function(){
    console.log ("Hello Js User" ) ;
}

JsUser.greetingTwo = function(){
    console.log ( `Hello Js User, ${this.name}` ) ;
}
console.log ( JsUser.greeting ) ;       // function reference
console.log ( JsUser.greeting() ) ;     // function execute

console.log ( JsUser.greetingTwo() ) ;








