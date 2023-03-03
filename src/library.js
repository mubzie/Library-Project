const addBookBtn = document.getElementById('add-book-btn');
const closeFormBtn = document.querySelector('.close-form-btn');
const addBookForm = document.getElementById('addBookForm');
const formModal = document.querySelector('.big-modal');
const display = document.querySelector('.display');

// form validation
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const checkBox = document.getElementById('read-status')
const titleStatus = document.querySelector('#title + span.error')
const authorStatus = document.querySelector('#author + span.error')
const pageStatus = document.querySelector('#pages + span.error')
// const checkStatus = document.querySelector('#read-status + span.error')



titleInput.addEventListener('input', (e) => {

    if (titleInput.validity.valid) {
        titleStatus.textContent = "";
        titleStatus.classList.add('error')
    } else {
        titleError()
    }

})

authorInput.addEventListener('input', (e) => {

    if (authorInput.validity.valid) {
        authorStatus.textContent = "";
        authorStatus.classList.add('error')
    } else {
        authorError()
    }

})

pagesInput.addEventListener('input', (e) => {

    if (pagesInput.validity.valid) {
        pageStatus.textContent = "";
        pageStatus.classList.add('error')
    } else {
        pageError()
    }

})

checkBox.addEventListener('input', (e) => {

    if (checkBox.validity.valid) {
        console.log(e)
        checkBox.setCustomValidity("")
        // checkStatus.textContent = "";
        // checkStatus.classList.add('error')
    } else {
        checkError()
    }

})

const titleError = () => {
    if(titleInput.validity.valueMissing) {
        titleStatus.textContent = "you need valid input"
    } else if (titleInput.validity.tooShort) {
        
        titleStatus.textContent = `input should be at least ${titleInput.minLength} characters; you entered ${titleInput.value.length}.`;
    }

    titleStatus.classList.add('error', 'active')
}

const authorError = () => {
    if(authorInput.validity.valueMissing) {
        authorStatus.textContent = "you need valid input"
    } else if (authorInput.validity.tooShort) {

        authorStatus.textContent = `input should be at least ${authorInput.minLength} characters; you entered ${authorInput.value.length}.`;
    }

    authorStatus.classList.add('error', 'active')
}

const pageError = () => {
    if(pagesInput.validity.valueMissing) {
        pageStatus.textContent = "you need valid input"
    } else if (pagesInput.validity.tooShort) {

        pageStatus.textContent = `input should be at least ${pagesInput.minLength} characters; you entered ${pagesInput.value.length}.`;
    }

    pageStatus.classList.add('error', 'active')
}

const checkError = () => {
    if(checkBox.validity.valueMissing) {
        // checkBox.textContent = "you need valid input"
        checkBox.setCustomValidity('please')
    } 

    // checkStatus.classList.add('error', 'active')
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

function addBookToLibrary(e) {

    if(!titleInput.validity.valid || !authorInput.validity.valid || !pagesInput.validity.valid || !checkBox.validity.valid) {
        titleError()
        authorError()
        pageError()
        checkError()
    }
    e.preventDefault();
    

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('read-status').checked;

    const book = new Book(title, author, pages, readStatus);

    myLibrary.push(book);

    myLibrary.forEach((item, i) => {
        // eslint-disable-next-line no-param-reassign
        item.id = i + 0;
    });

    // eslint-disable-next-line no-use-before-define
    displayBook(book, book.id)

    addBookForm.reset()

}

addBookForm.addEventListener('submit', addBookToLibrary);

function displayBook(book, i) {

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const paraTitle = document.createElement('div');
    paraTitle.classList.add('title');
    paraTitle.textContent = `Title: ${book.title}`

    const paraAuthor = document.createElement('div');
    paraAuthor.classList.add('author');
    paraAuthor.textContent = `Author: ${book.author}`

    const paraPages = document.createElement('div');
    paraPages.classList.add('pages')
    paraPages.textContent = `page: ${book.pages}`

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const readState = document.createElement('button');
    readState.classList.add('change-status', 'display-btn');
    readState.textContent = `${book.readStatus()}`
        
    const deleteBookBtn = document.createElement('button');
    deleteBookBtn.classList.add('del-btn', 'display-btn');
    deleteBookBtn.textContent = 'delete book'
    deleteBookBtn.setAttribute('data-id', `${i}`)

    btnContainer.append(readState, deleteBookBtn);

    cardContainer.append(paraTitle, paraAuthor, paraPages, btnContainer);

    display.appendChild(cardContainer);

    closeForm();

    // eslint-disable-next-line func-names
    Book.prototype.readStyle = function() {
        if(this.isRead === true) {
            readState.classList.add('read')
        } else if(this.isRead === false) {
            readState.classList.add('not-read')
        }
    }
    book.readStyle();

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
