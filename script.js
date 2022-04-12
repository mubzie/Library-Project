//DOM element selector
let addBookBtn = document.getElementById('add-book-btn');
let closeFormBtn = document.getElementsByClassName('close-form-btn')[0];
let addBookForm = document.getElementById('addBookForm');
let formModal = document.querySelector('.big-modal');

//this code get the form open
addBookBtn.addEventListener('click', () => {
    formModal.classList.toggle('active')
});

//closeform function that closes the form
closeFormBtn.addEventListener('click', closeForm);

function closeForm() {
    formModal.classList.remove("active")
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

// Book.prototype.changeStatus = function (e) {
//     if(e.ClassList.contains('readBtn')) {
//         if(e.innerHTML == 'true') {
//             e.innerHTML = 'false'
//             console.log('havent read')
//         } else if(e.innerHTML == 'false'){
//             e.innerHTML = 'true'
//             console.log('have read')
//         }
//     }
// }

// changeStatus();

const addBookToLibrary = (e) => {
e.preventDefault();

const titleInput = document.getElementById('title').value;
const authorInput = document.getElementById('author').value;
const pagesInput = document.getElementById('pages').value;
const readStatusInput = document.getElementById('read-status').checked;

// if(readStatusInput === false) {
//     readStatusInput.value = 'not read'
//     console.log('true')
// } else {
//     readStatusInput.checked = 'read'
//     console.log('false')
// }

book = new Book(titleInput, authorInput, pagesInput, readStatusInput);
myLibrary.push(book);

    console.log(myLibrary);
    displayBook(myLibrary);
    // form.reset();
    
}

addBookForm.addEventListener('submit', addBookToLibrary)

//A function that loops through the array and displays each book on the page
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
           <button class="icon-btn delBtn" data-index=${i}><img src="/delete-btn.svg" alt="delete btn"></button>
                    </td>`;
        table += `</tr>` 
    });
    table += '</table>';


    document.querySelector('.books-display').innerHTML = table;
    closeForm();
    
    let delBtns = document.querySelectorAll('.delBtn');

    delBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const i = btn.dataset.index;
            myLibrary.splice(i, 1);
            console.log(myLibrary)
            btn.closest('tr').remove();
        })
    });
    }




