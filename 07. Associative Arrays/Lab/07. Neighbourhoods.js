function neighbourhood(input) {
  let map = new Map();
  let neighbourhoods = input[0].split(', ');

  for (let i = 0; i < neighbourhoods.length; i++) {
    let neighbourhoodName = neighbourhoods[i];
    map.set(neighbourhoodName, []);
  }

  for (let i = 1; i < input.length; i++){
    let entries = input[i].split(' - ');
    let neighbourhood = entries[0];
    let person = entries[1];
    if (neighbourhoods.includes(neighbourhood)){
        map.get(neighbourhood).push(person);
    }
  }
  let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length);

  for (let [key, value] of sorted) {
      console.log(`${key}: ${value.length}`);
      for (let i = 0; i < value.length; i++){
          console.log(`--${value[i]}`);
      }
  }
}

