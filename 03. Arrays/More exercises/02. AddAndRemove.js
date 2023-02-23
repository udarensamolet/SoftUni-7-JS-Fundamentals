function addAndRemove(commands){
    let array = [];
    let counter = 0;
    for (let i = 0; i < commands.length; i++){
        counter++;
        if (commands[i] == "add"){
            array.push(counter);
        } else if (commands[i] == "remove"){
            array.pop();
        }
    }
    if(array.length == 0){
        console.log('Empty');
    } else {
        console.log(array.join(' '));
    }
}