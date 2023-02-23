function matrix(n){
    for (let i = 0; i < n; i++){
        printLine(n);
    }

    function printLine(n){
        let line = "";
        for (let i = 0; i < n; i++){
            line += `${n} `;
        }
        console.log(line);
    }
}