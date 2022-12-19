const myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// eslint-disable-next-line func-names
Book.prototype.isRead = function() {
    console.log(this.read)
}

const book1 = new Book('Ade lives', 'Christopher', '49', 'read');
const book2 = new Book('I will make it', 'Me', '50', 'not yet');
book1.isRead();
myLibrary.push(book1, book2);
console.log(myLibrary);