function companyUsers(input){
    let companies = new Map();

    for(let i = 0; i < input.length; i++){
        let tokens = input[i].split(' -> ');
        let companyName = tokens[0];
        let companyUser = tokens[1];

        if (!companies.has(companyName)){
            companies.set(companyName, new Set());
        }
        companies.get(companyName).add(companyUser);
    }

    let sortedCompanies = Array.from(companies.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for(let company of sortedCompanies){
        console.log(company[0]);
        for (let user of company[1]){
            console.log(`-- ${user}`);
        }
    }
}