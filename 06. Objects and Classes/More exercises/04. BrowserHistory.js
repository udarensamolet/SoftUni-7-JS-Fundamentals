function browserHistory(browser, commands){
    for (let command of commands){
        if (command == "Clear History and Cache") {
            browser["Open Tabs"].length = 0;
            browser["Recently Closed"].length = 0;
            browser["Browser Logs"].length = 0;
        } else {
            let tokens = command.split(" ");
            let token = tokens[0];
            let website = tokens.slice(1, tokens.length).join(" ");
            if (token == "Close"){
                if (browser["Open Tabs"].includes(website)){
                    browser["Open Tabs"].splice(browser["Open Tabs"].indexOf(website), 1);
                    browser["Recently Closed"].push(website);
                    browser["Browser Logs"].push(command);

                }
            } else if (token == "Open"){
                browser["Open Tabs"].push(website);
                browser["Browser Logs"].push(command);
            }
        }
    }
    console.log(browser["Browser Name"]);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);
}