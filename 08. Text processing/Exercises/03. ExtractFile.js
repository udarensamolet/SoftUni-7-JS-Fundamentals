function extractFile(input){
    let fileName = input.substring(input.lastIndexOf('\\') + 1, input.lastIndexOf('.'));
    let extenstion = input.substring(input.lastIndexOf('.') + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extenstion}`);
}