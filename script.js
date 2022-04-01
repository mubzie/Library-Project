//this code get the DOM element needed to bring up the form to add new book and to also close the form
let addBookBtn = document.getElementById('button');
let closeFormBtn = document.getElementsByClassName('close')[0];
let form = document.getElementById('form');

//this code get the form open
addBookBtn.addEventListener('click', () => form.style.display = 'block');

//closeform function that closes the form
closeFormBtn.addEventListener('click', closeForm);

function closeForm() {
    form.style.display = 'none';
}

// All of your book objects are going to be stored in a simple array, 
//so add a function to the script (not the constructor) that can take user’s input 
//and store the new book objects into an array.

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Book.prototype.info = function () {
//     return `${this.title} ${this.author} ${this.pages} ${this.read}`
// }

Book.prototype.removeRow = function () {
    
}

const addBookToLibrary = (e) => {
e.preventDefault();

const titleInput = document.getElementById('title').value;
const authorInput = document.getElementById('author').value;
const pagesInput = document.getElementById('pages').value;
const readStatusInput = document.getElementById('read-status').checked;

book = new Book(titleInput, authorInput, pagesInput, readStatusInput);
myLibrary.push(book);

    console.log(myLibrary);
    displayBook(myLibrary);
    
}

form.addEventListener('submit', addBookToLibrary)

//A function that loops through the array and displays each book on the page
function displayBook(myLibrary) {
    let table = '<table border="1">';
    table += `<tr><th>Author</th><th>Title</th><th>Pages</th><th>Read Status</th><th>remove book</th></tr>`;
    myLibrary.forEach((library) => {
        table += `<tr>`;
           table += `<td>${library.author}</td>`;
           table += `<td>${library.title}</td>`;
           table += `<td>${library.pages}</td>`;
           table += `<td>${library.read}</td>`;
        //    table += `<td style="background-color: #f6c5c5">
        //    <button style="height: 24px: width 24px: border: 0px transparent;"><img src="/delete-btn.svg" alt="delete btn"></button>
        //             </td>`;
        table += `<td style="background-color: #f6c5c5">
        <button class="icon-btn"><img src="/delete-btn.svg" alt="delete btn"></button>
                    </td>`;
        table += `</tr>` 
    });
    table += '</table>';

    document.querySelector('.books-display').innerHTML = table;
    closeForm();
    
    }




