function login(tokens){
    let user = tokens[0];
    let splitUser = user.split('');
    let reversedArray = splitUser.reverse();
    let reversedUser = reversedArray.join('');

    let index = 1;
    let input = tokens[index];

    let counter = 0;
    let isLoggedIn = true;

    while (input != reversedUser){
        if (counter == 3){
            console.log(`User ${user} blocked!`);
            isLoggedIn = false;
            break;
        }
        console.log(`Incorrect password. Try again.`);
        counter++;
        index++;
        input = tokens[index];
        
    }
    if (isLoggedIn){
        console.log(`User ${user} logged in.`);
    }
}