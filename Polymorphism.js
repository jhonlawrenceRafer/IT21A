class Person{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);

    }
}

class Student extends Person{
    constructor(name,rolNumber){
super(name);
this.rollNumber = rollNumber;
    }
    logDetails(){
    console.log ('Name: $ {this.name},Rollnumber:${this.rollNumber}')
    }
    sayName(){
        //do Stuff
        console.log("From");
        super.sayName();
    }
}

var Student = new Student ("Heisenberg", 1);
Student.logDetails();
Student.sayName();