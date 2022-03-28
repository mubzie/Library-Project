let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}

Book.prototype.info = function () {
    return `${this.title} ${this.author} ${this.pages} ${this.read}`
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

addBookToLibrary('How to win friends and influence people', 'Robert Newman', 500, 'has read')

console.log(myLibrary)

// //get form
// let form = document.getElementById('form');

// //get the btn that brings up the form
// let btn = document.getElementById('button');

// let closeFormBtn = document.getElementsByClassName('close')[0];

// btn.addEventListener('click', () => form.style.display = 'block');

// closeFormBtn.addEventListener('click', () => form.style.display = 'none')

