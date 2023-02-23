function aMinerTask(input) {
  let resources = new Map();
  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);

    if (!resources.has(resource)){
        resources.set(resource, quantity);
    } else {
        let newQuantity = resources.get(resource) + quantity;
        resources.set(resource, newQuantity);
    }
  }

  for(let resource of resources){
      console.log(`${resource[0]} -> ${resource[1]}`);
  }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    );
