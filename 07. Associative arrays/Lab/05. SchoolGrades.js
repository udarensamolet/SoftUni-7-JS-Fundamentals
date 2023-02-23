function grades(input) {
  let map = new Map();
  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(' ');
    let name = tokens[0];
    let grades = tokens.splice(1, tokens.length).map(Number);

    if (!map.has(name)) {
      map.set(name, []);
      map.set(name, map.get(name).concat(grades));
    } else {
      map.set(name, map.get(name).concat(grades));
    }
  }

  let sorted = Array.from(map).sort((a, b) => average(a, b));
  for (let [key, value] of sorted) {
    console.log(`${key}: ${value.join(", ")}`);
  }

  function average(a, b) {
    let aSum = 0;
    for (let i = 0; i < a[1].length; i++) {
      aSum += a[1][i];
    }
    let bSum = 0;
    for (let i = 0; i < b[1].length; i++) {
      bSum += b[1][i];
    }

    let aAverage = aSum / a[1].length;
    let bAverage = bSum / b[1].length;
    return aAverage - bAverage;
  }
}
