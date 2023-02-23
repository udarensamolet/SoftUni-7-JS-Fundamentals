function extractEmails(input){
    let pattern = /[^\S][A-Za-z0-9]+[\.|\-|_]?[A-Za-z0-9]*@[A-Za-z\-]+(?:\.[A-Za-z]+)+/g;
    let result = input.match(pattern);

    for (let mail of result){
        console.log(mail.trim());
    }
}