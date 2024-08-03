//stack (primitive) heaps (non-primitive)
// in stack a copy of an item is given so the actual value doesn't change
// in heap variables refer to a single point , a reference is given so if one variable is changed it changes both the variables 

let channelName = "sagar"

let anotherName = channelName
anotherName = "sagarWithMoreKnowledge"
console.log(anotherName);
console.log(channelName);


let user1 = {
    email: "user1@gmail.com",
    mob_no: "9604854390"
}
let user2 = user1
user2.email = "user2@gmail.com"
console.log(user1.email);
console.log(user2.email);



