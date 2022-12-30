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
        return 'not read';
    
}

// const book2 = new Book('bro', 'sis', '33', true);
// console.log(book2)
// console.log(book2.readStatus())

function addBookToLibrary(e) {
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

    console.log(myLibrary)

   // eslint-disable-next-line no-use-before-define
   displayBook(book, book.id)

}

addBookBtn.addEventListener('submit', addBookToLibrary);

function displayBook(book, i) {

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
    
        const paraTitle = document.createElement('div');
        paraTitle.textContent = `${book.title}`

        const paraAuthor = document.createElement('div');
        paraAuthor.textContent = `${book.author}`

        const paraPages = document.createElement('div');
        paraPages.textContent = `${book.pages}`

        const readState = document.createElement('button');
        readState.classList.add('change-status');
        readState.textContent = `${book.readStatus()}`

        const deleteBookBtn = document.createElement('button');
        deleteBookBtn.classList.add('del-btn');
        deleteBookBtn.setAttribute('data-id', `${i}`)

        cardContainer.append(paraTitle, paraAuthor, paraPages, readState, deleteBookBtn);

        display.appendChild(cardContainer);

        const changeStatus = document.querySelectorAll('.change-status');

        changeStatus.forEach( btn => {
                btn.addEventListener('click', (e) => {
                    e.stopImmediatePropagation()
                    console.log(e.target)
                    if(readState.textContent === 'read') {
                        readState.textContent = 'not read'
                    } else if(readState.textContent === 'not read') { 
                        readState.textContent = 'read';
                    }
                })
            
        })

        const deleteBtns = document.querySelectorAll('.del-btn');

        deleteBtns.forEach( btn => {
            btn.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                const index = btn.dataset.id;
                console.log(index);

                myLibrary.splice(index, 1);
                
                btn.closest('div').remove();

            })
        })

}
