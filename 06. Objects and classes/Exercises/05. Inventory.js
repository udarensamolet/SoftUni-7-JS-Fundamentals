function inventory(input) {
  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }

  let heroes = [];

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(" / ");
    let name = tokens[0];
    let level = Number(tokens[1]);
    let items = tokens[2].split(", ");

    let hero = new Hero(name, level, items);
    heroes.push(hero);
  }

  heroes.sort((a, b) => a.level - b.level);

  for (let hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(', ')}`);
  }
}