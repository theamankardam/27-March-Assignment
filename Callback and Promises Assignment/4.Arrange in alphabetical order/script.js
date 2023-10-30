let bookList = [{ title: "Alice's Adventures in Wonderland", Author: 'Lewis Carroll', year: '1862' },
{ title: "Harry Potter and the Philosopher's", Author: 'J.K.Rowling', year: '1997' },
{ title: 'Twilight', Author: 'Stephenie Meyer', year: '2005' },
{ title: 'Ulysses', Author: 'James Joyce', year: '1904' },
{ title: 'Don Quixote', Author: 'Miguel de Cervantes', year: '1615' },];

function list(bookList, titles) {
    let onlyTitles = bookList.map((num) => num.title)
    console.log(titles(onlyTitles));
}

function titles(onlyTitles) { return onlyTitles.sort(); }

list(bookList, titles);