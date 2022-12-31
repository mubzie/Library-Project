// DOM element selector
const addBookBtn = document.getElementById('add-book-btn');
const closeFormBtn = document.getElementsByClassName('close-form-btn')[0];
const addBookForm = document.getElementById('addBookForm');
const formModal = document.querySelector('.big-modal');

// this code get the form open
addBookBtn.addEventListener('click', () => {
    formModal.classList.add('active')
});

// closeform function that closes the form
function closeForm() {
    formModal.classList.remove("active")
}

closeFormBtn.addEventListener('click', closeForm);

// All of your book objects are going to be stored in a simple array, 
// so add a function to the script (not the constructor) that can take user’s input 
// and store the new book objects into an array.

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const addBookToLibrary = (e) => {
e.preventDefault();

const titleInput = document.getElementById('title').value;
const authorInput = document.getElementById('author').value;
const pagesInput = document.getElementById('pages').value;
const readStatusInput = document.getElementById('read-status').checked;

const book = new Book(titleInput, authorInput, pagesInput, readStatusInput);
myLibrary.push(book);


    // eslint-disable-next-line no-use-before-define
    displayBook(myLibrary);
    addBookForm.reset();
    
}

addBookForm.addEventListener('submit', addBookToLibrary)

// A function that loops through the array and displays each book on the page
function displayBook(myLibrary) {
    let table = '<table border="1">';
    table += `<tr><th>Author</th><th>Title</th><th>Pages</th><th>Read Status</th><th>remove book</th></tr>`;
    
    myLibrary.forEach((library, i) => {
        table += `<tr>`;
           table += `<td>${library.author}</td>`;
           table += `<td>${library.title}</td>`;
           table += `<td>${library.pages}</td>`;
           table += `<td>${library.read}</td>`;

           table += `<td style="background-color: #f6c5c5">
           <button class="icon-btn delBtn" data-index=${i}><img src="svg/delete-btn.svg" alt="delete btn"></button>
                    </td>`;
        table += `</tr>` 
    });
    table += '</table>';


    document.querySelector('.books-display').innerHTML = table;
    closeForm();
    
    const delBtns = document.querySelectorAll('.delBtn');

    delBtns.forEach( btn => {
        btn.addEventListener('click', () => {
            const i = btn.dataset.index;
            myLibrary.splice(i, 1);
            btn.closest('tr').remove();
        })
    });
    }




