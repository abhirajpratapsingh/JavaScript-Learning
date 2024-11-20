const accountId = 1
let accountEmail = "abhirajpratapsingh13@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur" // it is also possible ( variable )
accountState = "UP" ; // semicolon is optional 

console.log(accountId) ;
console.log(accountEmail) ;
console.log(accountPassword) ;

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountCity,accountState])
