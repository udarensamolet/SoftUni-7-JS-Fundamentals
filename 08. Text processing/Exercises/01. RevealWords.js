function revealWord(templateInput, input){
    let output = "";
    let templates = templateInput.split(", ");
    for (let i = 0; i < templates.length; i++){
        let checkWord = '*'.repeat(templates[i].length);
        if (input.includes(checkWord)){
            output = input.replace(checkWord, templates[i]);
            input = output;
        }
    }
    console.log(output);
}