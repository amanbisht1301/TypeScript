"use strict";
//Create a file named main.ts with TypeScript code:
// TypeScript source file (main.ts)
// Define a strongly typed function
function calculateArea(width, height) {
    return width * height;
}
// Implement the interface
class Employee {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    greet() {
        return `Hello, my name is ${this.name} and I work as a ${this.role}.`;
    }
}
// Create an instance
const employee = new Employee("Alice", 30, "Developer");
// Use the function and object
console.log(`Area calculation: ${calculateArea(5, 10)}`);
console.log(employee.greet());
// Using TypeScript-specific features like type assertion
const unknownValue = "This is a string";
const strLength = unknownValue.length;
console.log(`String length: ${strLength}`);
