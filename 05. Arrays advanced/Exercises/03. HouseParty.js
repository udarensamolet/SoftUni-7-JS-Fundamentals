function houseParty(input) {
    let guests = [];
    for (let i = 0; i < input.length; i++) {
      let tokens = input[i];
      let commands = tokens.split(" ");
  
      if (commands[2] == `going!`) {
        if (!guests.includes(commands[0])) {
          guests.push(commands[0]);
        } else {
          console.log(`${commands[0]} is already in the list!`);
        }
      } else if (commands[2] == "not") {
        if (guests.includes(commands[0])) {
          guests.splice(guests.indexOf(commands[0]), 1);
        } else {
          console.log(`${commands[0]} is not in the list!`);
        }
      }
    }
  
    for (let guest of guests) {
      console.log(guest);
    }
  }