function bookshelf(input){
    let shelves = [];
    let books = [];
    for (let i = 0; i < input.length; i++){
        let token = input[i];
        if (token.includes(" -> ")){
            let tokens = token.split(" -> ");
            let shelfId = Number(tokens[0]);
            let shelfGenre = tokens[1];
            let shelf = {};
            shelf.shelfId = shelfId;
            shelf.shelfGenre = shelfGenre;
            
            if (!shelves.some(x => x.shelfId == shelfId)){
                shelves.push(shelf);
            }

        } else if (token.includes(":")){
            let tokens = token.split(": ");
            let bookTitle = tokens[0];
            let moreTokens = tokens[1].split(", ");
            let bookAuthor = moreTokens[0];
            let bookGenre = moreTokens[1];

            let book = {};
            book.bookTitle = bookTitle;
            book.bookAuthor = bookAuthor;
            book.bookGenre = bookGenre;
            if (shelves.some(x => x.shelfGenre == bookGenre)){
                books.push(book);
            }
        } 
    }

    let shelvesBooksCount = new Map();
    for (let shelf of shelves){
        let totalCount = 0;
        for (let book of books){
            if (book.bookGenre == shelf.shelfGenre){
                totalCount++;
            }
        }
        shelvesBooksCount.set(shelf.shelfGenre, totalCount);
    }

    let sortedShelvesBookCount = Array.from(shelvesBooksCount.entries()).sort((a, b) => b[1] - a[1]);
    let sortedBooksTitle = Array.from(books.values()).sort((a, b) => a.bookTitle.localeCompare(b));
    for (let shelf of sortedShelvesBookCount){
        for (let shelfInfo of shelves){
            if (shelf[0] == shelfInfo.shelfGenre){
                console.log(`${shelfInfo.shelfId} ${shelfInfo.shelfGenre}: ${shelf[1]}`);
                for (let book of sortedBooksTitle){
                    if (book.bookGenre == shelf[0]){
                        console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
                    }
                }
            }
        }
    }
}