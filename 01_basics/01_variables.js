const accountId = 144553
let accountEmail = "sagar@google.com"
var accountPassword = "12345"
accountCity = "kolkata" 

//accountId = 2  // not allowed

accountEmail = "sagar@meta.com"
accountPassword = "1234"
accountCity = "Bengaluru"
let accountState;
/*
preferred not to use var
because of issue in block scope and functional scope

*/


//console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])