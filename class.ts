// Class and OOPS concept in JS 
// Class - blueprint of the object with properties (data) and methods (functions).

class Person101 {
   private name: string;
   private age: number;

  // Constructor is called when you create a new object
  constructor( name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  newgreet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person101("Aman", 30);
person1.newgreet();  // Output: Hi, I am Aman and I am 30 years old.
//console.log(person1.name);


class Book {
    title : string;
    author: string;
    price?: number;

    constructor(title:string,author:string){
        this.title = title,
        this.author= author
    }

    printdetails(){
        console.log (`The ${this.title} book author name is ${this.author}`);
    }

}

const book = new Book("Class basics","Aman Bisht");
book.printdetails();





class Car{
    brand:string;
    year:number;

    constructor(brand:string,year:number){
        this.brand =brand;
        this.year = year;
    }

    getAge():number{
        console.log (`The car is ${this.year} old`);
        return this.year;
    }
}

const c1 = new Car("Tata", 2023);
const yearofCar = c1.getAge();
console.log(yearofCar);













