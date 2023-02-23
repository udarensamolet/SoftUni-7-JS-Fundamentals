function employees(input){
    class Employee{
        constructor (name){
            this.name = name;
            this.number = name.length;
        }
    }

    let employees = [];
    for (let i = 0; i < input.length; i++){
        let employee = new Employee(input[i]);
        employees.push(employee);
    }

    for (let employee of employees){
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}