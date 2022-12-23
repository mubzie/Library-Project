const addBookBtn = document.getElementById('addBookForm');
const display = document.querySelector('.display');

// this is the book array that store all book user added through the constructor function
const myLibrary = [];

// this is the constructor function that get called using the "new" keyword 
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// book prototype that check if book has been read or not
// eslint-disable-next-line func-names
Book.prototype.readStatus = function() {
    if(this.isRead === true) {
        return 'read';
    } 
        return 'not yet';
    
}

const book2 = new Book('bro', 'sis', '33', true);
console.log(book2)
console.log(book2.readStatus())

const book3 = new Book('sis', 'damn', '23', false)
console.log(book3)
console.log(book3.readStatus()) 



function addBookToLibrary(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('read-status').checked;

    const book2 = new Book(title, author, pages, readStatus);

    myLibrary.push(book2);

    myLibrary.forEach( library => {
        display.textContent = `${library.title} ${library.author} ${library.pages} ${book2.readStatus()}`
    })

    console.log(myLibrary)
}

addBookBtn.addEventListener('submit', addBookToLibrary);

function displayBook() {
    
}