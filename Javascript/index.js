// Creating Constructor
// Creating an object with the help of function

function Student(firstname,lastname,age){
    this.name = firstname,
    this.lastname = lastname,
    this.age = age,
    this.greet = function(){
        return "Welcome " + this.name + " "
    }
}

Students = []
Students.push(new Student("Rahul","Vats",15))
Students.push(new Student("Manik","Vats",15))
Students.push(new Student("Deepak","Vats",15))
Students.push(new Student("Angrej","Vats",15))

for (var i = 0; i<Students.length; i++){
    func = Students[i]
    console.log(func.greet())
}

