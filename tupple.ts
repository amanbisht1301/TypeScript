// What is a Tuple in TypeScript?
// A Tuple is a special type of array where:
// The number of elements is fixed
// The type of each element is known and different

//Basic Syntax
let person: [string, number];
person = ["Aman", 30];  

// added alias to the tupple 

let users2 : { bottlename:string,bottleprice:number } = 
{
    bottlename: "kinley",
    bottleprice:20
}

console.log(users2);

// using function input parameter in the tupple 

function user3 ([penname,penprice]:[string,number]){
    console.log(`My pen is ${penname} and price of it ${penprice} rs`);
}

user3(["parker",300]);