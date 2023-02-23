function towns(input){
    class Town {
        constructor(name, latitude, longtitude){
            this.name = name;
            this.latitude = latitude;
            this.longtitude = longtitude;
            this.print = () => console.log(`{ town: '${this.name}', latitude: '${this.latitude}', longitude: '${this.longtitude}' }`);
        }
    }

    for (let i = 0; i < input.length; i++){
        let tokens = input[i].split(' | ');
        let name = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longtitude = Number(tokens[2]).toFixed(2);
        let town = new Town(name, latitude, longtitude);
        town.print();
    }
}