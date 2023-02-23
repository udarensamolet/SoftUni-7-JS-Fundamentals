function arrayManipulatior(arrInput, tokens) {
  for (let i = 0; i < tokens.length; i++) {
    let commands = tokens[i].split(" ");
    let command = commands[0];

    if (command == "add") {
      let index = Number(commands[1]);
      let element = Number(commands[2]);
      add(arrInput, index, element);
    } else if (command == "addMany") {
      let index = Number(commands[1]);
      let arrElementsToBeAdded = [...commands].slice(2).map(Number);
      addMany(arrInput, index, arrElementsToBeAdded);
    } else if (command == "contains") {
      let element = Number(commands[1]);
      let result = checkContain(arrInput, element);
      console.log(result);
    } else if (command == "remove") {
      let index = Number(commands[1]);
      remove(arrInput, index);
    } else if (command == "shift") {
      let positions = Number(commands[1]);
      shift(arrInput, positions);
    } else if (command == "sumPairs") {
      sumPairs(arrInput);
    } else if (command == "print") {
      console.log(`[ ` + arrInput.join(", ") + ` ]`);
      break;
    }
  }

  function add(arr, index, element) {
    return arr.splice(index, 0, element);
  }

  function addMany(arr, index, arrElements) {
    for (let i = 0; i < arrElements.length; i++) {
      arr.splice(index + i, 0, arrElements[i]);
    }
    return arr;
  }

  function checkContain(arr, element) {
    return arr.indexOf(element);
  }

  function remove(arr, index) {
    return arr.splice(index, 1);
  }

  function shift(arr, positions) {
    while (positions > 0) {
      arr.push(arr.shift());
      positions--;
    }
    return arr;
  }

  function sumPairs(arr) {
    if (arr.length % 2 == 0) {
        for (let i = 0; i < arr.length - 1; i++) {
          arr[i] += arr[i + 1];
          arr.splice(i + 1, 1);
        }
      } else {
        for (let i = 0; i < arr.length - 2; i++) {
          arr[i] += arr[i + 1];
          arr.splice(i + 1, 1);
        }
      }
      return arr;
  }
}