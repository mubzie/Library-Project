/* eslint-disable no-use-before-define */
const addBookBtn = document.getElementById('add-book-btn');
const closeFormBtn = document.querySelector('.close-form-btn');
const addBookForm = document.getElementById('addBookForm');
const formModal = document.querySelector('.big-modal');
const display = document.querySelector('.display');

// get form input validation DOM
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const titleStatus = document.querySelector('#title + span.error')
const authorStatus = document.querySelector('#author + span.error')
const pageStatus = document.querySelector('#pages + span.error')

// check title input and validiate using constraint API
titleInput.addEventListener('input', () => {

    if (titleInput.validity.valid) {
        titleStatus.textContent = "";
        titleStatus.classList.add('error')
    } else {
        titleError()
    }

})

// show title error function
const titleError = () => {
    if(titleInput.validity.valueMissing) {
        titleStatus.textContent = "You need to enter book's title"
    } else if (titleInput.validity.tooShort) {
        
        titleStatus.textContent = `Input should be at least ${titleInput.minLength} characters; you entered ${titleInput.value.length}.`;
    }

    titleStatus.classList.add('error', 'active')
}

// check author input and validiate using constraint API
authorInput.addEventListener('input', () => {

    if (authorInput.validity.valid) {
        authorStatus.textContent = "";
        authorStatus.classList.add('error')
    } else {
        authorError()
    }

})

// show author error function
const authorError = () => {
    if(authorInput.validity.valueMissing) {
        authorStatus.textContent = "You need to enter author's name"
    } else if (authorInput.validity.tooShort) {

        authorStatus.textContent = `Input should be at least ${authorInput.minLength} characters; you entered ${authorInput.value.length}.`;
    }

    authorStatus.classList.add('error', 'active')
}

// check page input and validiate using constraint API
pagesInput.addEventListener('input', () => {

    if (pagesInput.validity.valid) {
        pageStatus.textContent = "";
        pageStatus.classList.add('error')
    } else {
        pageError()
    }

})

// show page error function
const pageError = () => {
    if(pagesInput.validity.valueMissing) {
        pageStatus.textContent = "You need to enter book's pages"
    } else if (pagesInput.validity.tooShort) {

        pageStatus.textContent = `Input should be at least ${pagesInput.minLength} characters; you entered ${pagesInput.value.length}.`;
    }

    pageStatus.classList.add('error', 'active')
}

// this code get the form open
addBookBtn.addEventListener('click', () => {
    formModal.classList.add('active')
});

// closeform function that closes the form
function closeForm() {
    formModal.classList.remove("active")
}

closeFormBtn.addEventListener('click', closeForm);

// this is the book array that store all book user added through the constructor function
const myLibrary = [];

// this is the class declaration that get called using the "new" keyword 
class Book {
    constructor (title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

// book prototype that check if book has been read or not
// eslint-disable-next-line func-names
Book.prototype.readStatus = function() {
    if(this.isRead === true) {
        return 'read';
    } 
        return 'not read';
    
}

// the function that get called when adding book to the page
function addBookToLibrary(e) {
    e.preventDefault()
    
    // getting all input value
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readState = document.getElementById('read-status').checked;

    // constructor instantiation
    const book = new Book(title, author, pages, readState);

    // add id to every book that get added to the myLibrary array
    myLibrary.forEach((item, i) => {
        // eslint-disable-next-line no-param-reassign
        item.id = i + 0;
    });

    // check if form validation is invalid and prevent the form to submit
    if(!titleInput.validity.valid || !authorInput.validity.valid || !pagesInput.validity.valid) {
        titleError()
        authorError()
        pageError()
        e.preventDefault();
    } else {
        // form is valid add the book to myLibrary array and display it on the webpage
        myLibrary.push(book);
        displayBook(book, book.id)
    }

}

addBookForm.addEventListener('submit', addBookToLibrary);

function displayBook(book, i) {

    // create book card container
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    // the title display 
    const paraTitle = document.createElement('div');
    paraTitle.classList.add('title');
    paraTitle.textContent = `Title: ${book.title}`

    // the author display 
    const paraAuthor = document.createElement('div');
    paraAuthor.classList.add('author');
    paraAuthor.textContent = `Author: ${book.author}`

    // the page display 
    const paraPages = document.createElement('div');
    paraPages.classList.add('pages')
    paraPages.textContent = `page: ${book.pages}`

    // create button display
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    // read state button that toggle state
    const readState = document.createElement('button');
    readState.classList.add('change-status', 'display-btn');
    readState.textContent = `${book.readStatus()}`
        
    // delete button that delete book from the myLibrary array and the DOM
    const deleteBookBtn = document.createElement('button');
    deleteBookBtn.classList.add('del-btn', 'display-btn');
    deleteBookBtn.textContent = 'delete book'
    deleteBookBtn.setAttribute('data-id', `${i}`)

    btnContainer.append(readState, deleteBookBtn);

    // append all display and button to card container
    cardContainer.append(paraTitle, paraAuthor, paraPages, btnContainer);

    // append card container to display DOM
    display.appendChild(cardContainer);

    // close form after the book has been added to the webpage
    closeForm();

    // reset form after the book has been added to the webpage
    addBookForm.reset()

    // read style method that check for checkbox input
    // eslint-disable-next-line func-names
    Book.prototype.readStyle = function() {
        if(this.isRead === true) {
            readState.classList.add('read')
        } else if(this.isRead === false) {
            readState.classList.add('not-read')
        }
    }
    book.readStyle();

    // change status
    const changeStatus = document.querySelectorAll('.change-status');

    changeStatus.forEach( btn => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            if(readState.textContent === 'read') {
                readState.textContent = 'not read'
                readState.classList.add('not-read');
                readState.classList.remove('read')
            } else if(readState.textContent === 'not read') { 
                readState.textContent = 'read';
                readState.classList.add('read');
                readState.classList.remove('not-read')
            }
            })
    })

    // delete books
    const deleteBtns = document.querySelectorAll('.del-btn');

    deleteBtns.forEach( btn => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            const index = btn.dataset.id;

            myLibrary.splice(index, 1);
            
            btn.parentElement.parentElement.remove();

        })
    })

}
