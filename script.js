let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `${this.title} ${this.author} ${this.pages} ${this.read}`
}

let btn = document.getElementById('button');

let form = document.getElementById('form');

btn.addEventListener('click', () => form.style.display = 'block');

const addBookToLibrary = (e) => {
    e.preventDefault();

const titleInput = document.getElementById('title').value;
const authorInput = document.getElementById('author').value;
const pagesInput = document.getElementById('pages').value;
const readStatusInput = document.getElementById('read-status').checked;

 book = new Book(titleInput, authorInput, pagesInput, readStatusInput);
myLibrary.push(book);

    console.log(myLibrary)
    
}

form.addEventListener('submit', addBookToLibrary)

// addBookToLibrary('How to win friends and influence people', 'Robert Newman', 500, 'has read')
// addBookToLibrary('How to win friends and influence people', 'Robert Newman', 500, 'has read')
// addBookToLibrary('How to win friends and influence people', 'Robert Newman', 500, 'has read')
// addBookToLibrary('How to win friends and influence people', 'Robert Newman', 500, 'has read')
// addBookToLibrary('How to win friends and influence people', 'Robert Newman', 500, 'has read')
// addBookToLibrary('How to win friends', 'Robert Newman', 500, 'has read')

// console.log(myLibrary)


//get form
// let form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
// e.preventDefault();

// let book = new Book(titleInput, authorInput, pagesInput, readStatusInput);

// const titleInput = document.getElementById('title').value;
// const authorInput = document.getElementById('author').value;
// const pagesInput = document.getElementById('pages').value;
// const readStatusInput = document.getElementById('read-status').checked;

// let book = new Book(titleInput, authorInput, pagesInput, readStatusInput);
//     myLibrary.push(book);

//     console.log(myLibrary)

    // addBookToLibrary();

// })

//get the btn that brings up the form
// let btn = document.getElementById('button');

// let closeFormBtn = document.getElementsByClassName('close')[0];

// btn.addEventListener('click', () => form.style.display = 'block');

// closeFormBtn.addEventListener('click', () => form.style.display = 'none')

// // write a function that loops through an array and display the book on the display

// const bookDisplay = document.querySelector('.books-display');

// function displayBook(myLibrary) {
// let table = '<table border="1">'
// table += `<tr><th>Author</th><th>Title</th><th>Pages</th><th>Read Status</th><th>remove book</th></tr>`;
// myLibrary.forEach((library) => {
//     table += `<tr>`;
//        table += `<td>${library.author}</td>`;
//        table += `<td>${library.title}</td>`;
//        table += `<td>${library.pages}</td>`;
//        table += `<td>${library.read}</td>`;
//        table += `<td>${library.read}</td>`;
//     table += `</tr>` 
// });
// table += '</table>';
// document.querySelector('.books-display').innerHTML = table;

// }

// displayBook(myLibrary);