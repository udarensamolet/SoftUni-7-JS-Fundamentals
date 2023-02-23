function comments(input){
    let users = [];
    let articles = [];
    let comments = [];
    for (let i = 0; i < input.length; i++){
        let token = input[i];
        if (token.includes("user ")){
            let tokensInfo = token.split(" ");
            let user = tokensInfo[1];
            if (!users.includes(user)) {
                users.push(user);
            }
        } else if (token.includes("article ")){
            let tokensInfo = token.split(" ");
            let article = tokensInfo[1];
            if (!articles.includes(article)) {
                articles.push(article);
            }
        } else if (token.includes(" posts ")){
            let tokensInfo = token.split(": ");
            let userArticleInfo = tokensInfo[0].split(" ");
            
            let user = userArticleInfo[0];
            let articleName = userArticleInfo[3];

            let commentInfo = tokensInfo[1].split(", ");
            let commentTitle = commentInfo[0];
            let commentContent = commentInfo[1];
            let comment = {};

            comment.title = commentTitle;
            comment.content = commentContent;
            comment.article = articleName;
            comment.user = user;
            if (users.includes(user) && articles.includes(articleName)){
                if(!comments.includes(comment)){
                    comments.push(comment);
                }
            }
        }
    }

    let articlesUsers = new Map();
    for (let comment of comments){
        if (!articlesUsers.has(comment.article)){
            if (!articlesUsers.has(comment.article)){
                articlesUsers.set(comment.article, comment.user);
            } else {
                articlesUsers.set(comment.article, Number(articlesUsers.get(comment.article) + 1));
            }
        }
    }
    let articlesComments = new Map();
    for (let comment of comments){
        if (!articlesComments.has(comment.article)){
            articlesComments.set(comment.article, 1);
        } else {
            articlesComments.set(comment.article, Number(articlesComments.get(comment.article) + 1));
        }
    }
    let sortedArticlesComments = Array.from(articlesComments.entries()).sort((a, b) => b[1] - a[1]);
    let sortedComments = Array.from(comments.values()).sort((a, b) => a.user.localeCompare(b.user));
    for (let sortedArticle of sortedArticlesComments){
        console.log(`Comments on ${sortedArticle[0]}`);
        for (let comment of sortedComments){
            if (comment.article == sortedArticle[0]){
                console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`);
            }
        }
    }
}