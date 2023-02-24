function addressBook(input) {
  let addresses = {};
  for (let i = 0; i < input.length; i++) {
    let [name, address] = input[i].split(":");
    addresses[name] = address;
  }

  let sorted = Object.entries(addresses);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [key, value] of sorted) {
      console.log(`${key} -> ${value}`);
  }
}

