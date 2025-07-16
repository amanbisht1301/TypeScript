// What is interface 
//In typescript it defines the structure of an object.

// Syntax: Basic Interface

interface User {
  name: string;
  age: number;
}

//Using Interface with an Object

const user1: User = {
  name: "Aman Bisht",
  age: 30
};

//Interface in Functions

function greet(user: User) {
  console.log(`Hello ${user.name}, age: ${user.age}`);
}

greet(user1);


//Create an interface Employee with name, department, and salary. 
// Then create an object that follows the structure.

interface Employee1 {
    empname : string;
    department :string;
    salary:number;
}


const empdetails : Employee1 = {
    empname : "Aman",
    department : "Technology",
    salary :170000

}

function printempdetails(emp : Employee1){
    console.log(`The ${emp.empname} is in ${emp.department} with salary ${emp.salary}`);
}

printempdetails(empdetails);