function cats(input){
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }

    let arr = input;

    for (let i = 0; i < arr.length; i++) {
        let properties = arr[i].split(' ');
        let name = properties[0];
        let age = properties[1];
        let cat = new Cat(name, age);
        cat.meow();
    }
}
