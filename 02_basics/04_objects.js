
const tinderUser = new Object() ;           // singleton Object
const tinderUser1 = {} ;                    // non singleton object 

// both are empty object 
console.log ( tinderUser ) ;
console.log ( tinderUser1 ) ;

tinderUser.id = "123abc" 
tinderUser.name = "Sammy" 
tinderUser.isLoggedIn = false 

console.log ( tinderUser ) ;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhiraj",
            middlename: "Pratap",
            lastname: "Singh"
        }
    }
}

console.log ( regularUser.fullname.userfullname.lastname ) ;        // singh

// combine object

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4: "d",
    5: "e"
}

const obj3 = { obj1 , obj2 } 

console.log ( obj3 ) ;

const obj4 = Object.assign(obj1,obj2) ;

console.log ( obj4 ) ;

const obj5 = {...obj1, ...obj2, ...obj3 }

console.log ( obj5 ) ;

console.log ( Object.keys(tinderUser) ) ;
console.log ( typeof Object.keys(tinderUser) ) ;

console.log ( Object.values(tinderUser) ) ;
console.log ( typeof Object.values(tinderUser) ) ;

console.log ( tinderUser.hasOwnProperty('name') ) ;
