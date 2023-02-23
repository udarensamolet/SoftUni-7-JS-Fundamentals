function arrayManipulation(commands) {
  let arr = commands.shift().split(' ').map(Number);
  for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum] = commands[i].split(' ');
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "Add":
          addElement(firstNum, arr);
        break;
      case "Remove":
          removeElement(firstNum, arr);
        break;
      case "RemoveAt":
          removeAt(firstNum, arr);
        break;
      case "Insert":
          insertNumberAt(firstNum, secondNum, arr);
        break;
    }
  }

  function addElement(number, arr) {
    arr.push(number);
  }

  function removeElement(number, arr) {
    let index = arr.indexOf(number);
    while (index > -1){
        arr.splice(index, 1);
        index = arr.indexOf(number);
    }
  }

  function removeAt(index, arr) {
    arr.splice(index, 1);
  }

  function insertNumberAt(number, index, arr) {
    arr.splice(index, 0, number);
  }
  
  console.log(arr.join(' '));
}