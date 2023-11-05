/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/* eslint-disable no-use-before-define */
const addBookBtn = document.getElementById("add-book-btn");
const closeFormBtn = document.querySelector(".close-form-btn");
const addBookForm = document.getElementById("addBookForm");
const formModal = document.querySelector(".big-modal");
const display = document.querySelector(".display");

// get form input validation DOM
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const titleStatus = document.querySelector("#title + span.error");
const authorStatus = document.querySelector("#author + span.error");
const pageStatus = document.querySelector("#pages + span.error");

// check title input and validiate using constraint API
titleInput.addEventListener("input", () => {
  if (titleInput.validity.valid) {
    titleStatus.textContent = "";
    titleStatus.classList.add("error");
  } else {
    titleError();
  }
});

// show title error function
const titleError = () => {
  if (titleInput.validity.valueMissing) {
    titleStatus.textContent = "You need to enter book's title";
  } else if (titleInput.validity.tooShort) {
    titleStatus.textContent = `Input should be at least ${titleInput.minLength} characters; you entered ${titleInput.value.length}.`;
  }

  titleStatus.classList.add("error", "active");
};

// check author input and validiate using constraint API
authorInput.addEventListener("input", () => {
  if (authorInput.validity.valid) {
    authorStatus.textContent = "";
    authorStatus.classList.add("error");
  } else {
    authorError();
  }
});

// show author error function
const authorError = () => {
  if (authorInput.validity.valueMissing) {
    authorStatus.textContent = "You need to enter author's name";
  } else if (authorInput.validity.tooShort) {
    authorStatus.textContent = `Input should be at least ${authorInput.minLength} characters; you entered ${authorInput.value.length}.`;
  }

  authorStatus.classList.add("error", "active");
};

// check page input and validiate using constraint API
pagesInput.addEventListener("input", () => {
  if (pagesInput.validity.valid) {
    pageStatus.textContent = "";
    pageStatus.classList.add("error");
  } else {
    pageError();
  }
});

// show page error function
const pageError = () => {
  if (pagesInput.validity.valueMissing) {
    pageStatus.textContent = "You need to enter book's pages";
  } else if (pagesInput.validity.tooShort) {
    pageStatus.textContent = `Input should be at least ${pagesInput.minLength} characters; you entered ${pagesInput.value.length}.`;
  }

  pageStatus.classList.add("error", "active");
};

// this code get the form open
addBookBtn.addEventListener("click", () => {
  formModal.classList.add("active");
});

// closeform function that closes the form
function closeForm() {
  formModal.classList.remove("active");
}

closeFormBtn.addEventListener("click", closeForm);

// this is the book array that store all book user added through the constructor function
const myLibrary = [];

// this is the class declaration that get called using the "new" keyword
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// book prototype that check if book has been read or not
// eslint-disable-next-line func-names
Book.prototype.readStatus = function () {
  if (this.isRead === true) {
    return "read";
  }
  return "not read";
};

// the function that get called when adding book to the page
function addBookToLibrary(e) {
  e.preventDefault();

  // getting all input value
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readState = document.getElementById("read-status").checked;

  // constructor instantiation
  const book = new Book(title, author, pages, readState);

  // add id to every book that get added to the myLibrary array
  myLibrary.forEach((item, i) => {
    // eslint-disable-next-line no-param-reassign
    item.id = i + 0;
  });

  // check if form validation is invalid and prevent the form to submit
  if (
    !titleInput.validity.valid ||
    !authorInput.validity.valid ||
    !pagesInput.validity.valid
  ) {
    titleError();
    authorError();
    pageError();
    e.preventDefault();
  } else {
    // form is valid add the book to myLibrary array and display it on the webpage
    myLibrary.push(book);
    displayBook(book, book.id);
  }
}

addBookForm.addEventListener("submit", addBookToLibrary);

function displayBook(book, i) {
  // create book card container
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  // the title display
  const paraTitle = document.createElement("div");
  paraTitle.classList.add("title");
  paraTitle.textContent = `Title: ${book.title}`;

  // the author display
  const paraAuthor = document.createElement("div");
  paraAuthor.classList.add("author");
  paraAuthor.textContent = `Author: ${book.author}`;

  // the page display
  const paraPages = document.createElement("div");
  paraPages.classList.add("pages");
  paraPages.textContent = `page: ${book.pages}`;

  // create button display
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  // read state button that toggle state
  const readState = document.createElement("button");
  readState.classList.add("change-status", "display-btn");
  readState.textContent = `${book.readStatus()}`;

  // delete button that delete book from the myLibrary array and the DOM
  const deleteBookBtn = document.createElement("button");
  deleteBookBtn.classList.add("del-btn", "display-btn");
  deleteBookBtn.textContent = "delete book";
  deleteBookBtn.setAttribute("data-id", `${i}`);

  btnContainer.append(readState, deleteBookBtn);

  // append all display and button to card container
  cardContainer.append(paraTitle, paraAuthor, paraPages, btnContainer);

  // append card container to display DOM
  display.appendChild(cardContainer);

  // close form after the book has been added to the webpage
  closeForm();

  // reset form after the book has been added to the webpage
  addBookForm.reset();

  // read style method that check for checkbox input
  // eslint-disable-next-line func-names
  Book.prototype.readStyle = function () {
    if (this.isRead === true) {
      readState.classList.add("read");
    } else if (this.isRead === false) {
      readState.classList.add("not-read");
    }
  };
  book.readStyle();

  // change status
  const changeStatus = document.querySelectorAll(".change-status");

  changeStatus.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      if (readState.textContent === "read") {
        readState.textContent = "not read";
        readState.classList.add("not-read");
        readState.classList.remove("read");
      } else if (readState.textContent === "not read") {
        readState.textContent = "read";
        readState.classList.add("read");
        readState.classList.remove("not-read");
      }
    });
  });

  // delete books
  const deleteBtns = document.querySelectorAll(".del-btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const index = btn.dataset.id;

      myLibrary.splice(index, 1);

      btn.parentElement.parentElement.remove();
    });
  });
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBEQUEwRCxzQkFBc0IsWUFBWSxjQUFjLHdCQUF3QjtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMkRBQTJELHVCQUF1QixZQUFZLGNBQWMseUJBQXlCO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSix5REFBeUQsc0JBQXNCLFlBQVksY0FBYyx3QkFBd0I7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxFQUFFO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbmNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1ib29rLWJ0blwiKTtcclxuY29uc3QgY2xvc2VGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1mb3JtLWJ0blwiKTtcclxuY29uc3QgYWRkQm9va0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEJvb2tGb3JtXCIpO1xyXG5jb25zdCBmb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJpZy1tb2RhbFwiKTtcclxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVwiKTtcclxuXHJcbi8vIGdldCBmb3JtIGlucHV0IHZhbGlkYXRpb24gRE9NXHJcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xyXG5jb25zdCBhdXRob3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpO1xyXG5jb25zdCBwYWdlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKTtcclxuY29uc3QgdGl0bGVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlICsgc3Bhbi5lcnJvclwiKTtcclxuY29uc3QgYXV0aG9yU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdXRob3IgKyBzcGFuLmVycm9yXCIpO1xyXG5jb25zdCBwYWdlU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlcyArIHNwYW4uZXJyb3JcIik7XHJcblxyXG4vLyBjaGVjayB0aXRsZSBpbnB1dCBhbmQgdmFsaWRpYXRlIHVzaW5nIGNvbnN0cmFpbnQgQVBJXHJcbnRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICBpZiAodGl0bGVJbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgdGl0bGVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgdGl0bGVTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aXRsZUVycm9yKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHNob3cgdGl0bGUgZXJyb3IgZnVuY3Rpb25cclxuY29uc3QgdGl0bGVFcnJvciA9ICgpID0+IHtcclxuICBpZiAodGl0bGVJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgIHRpdGxlU3RhdHVzLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBib29rJ3MgdGl0bGVcIjtcclxuICB9IGVsc2UgaWYgKHRpdGxlSW5wdXQudmFsaWRpdHkudG9vU2hvcnQpIHtcclxuICAgIHRpdGxlU3RhdHVzLnRleHRDb250ZW50ID0gYElucHV0IHNob3VsZCBiZSBhdCBsZWFzdCAke3RpdGxlSW5wdXQubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke3RpdGxlSW5wdXQudmFsdWUubGVuZ3RofS5gO1xyXG4gIH1cclxuXHJcbiAgdGl0bGVTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIsIFwiYWN0aXZlXCIpO1xyXG59O1xyXG5cclxuLy8gY2hlY2sgYXV0aG9yIGlucHV0IGFuZCB2YWxpZGlhdGUgdXNpbmcgY29uc3RyYWludCBBUElcclxuYXV0aG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICBpZiAoYXV0aG9ySW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgIGF1dGhvclN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBhdXRob3JTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhdXRob3JFcnJvcigpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBzaG93IGF1dGhvciBlcnJvciBmdW5jdGlvblxyXG5jb25zdCBhdXRob3JFcnJvciA9ICgpID0+IHtcclxuICBpZiAoYXV0aG9ySW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICBhdXRob3JTdGF0dXMudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGF1dGhvcidzIG5hbWVcIjtcclxuICB9IGVsc2UgaWYgKGF1dGhvcklucHV0LnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICBhdXRob3JTdGF0dXMudGV4dENvbnRlbnQgPSBgSW5wdXQgc2hvdWxkIGJlIGF0IGxlYXN0ICR7YXV0aG9ySW5wdXQubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke2F1dGhvcklucHV0LnZhbHVlLmxlbmd0aH0uYDtcclxuICB9XHJcblxyXG4gIGF1dGhvclN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIiwgXCJhY3RpdmVcIik7XHJcbn07XHJcblxyXG4vLyBjaGVjayBwYWdlIGlucHV0IGFuZCB2YWxpZGlhdGUgdXNpbmcgY29uc3RyYWludCBBUElcclxucGFnZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gIGlmIChwYWdlc0lucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICBwYWdlU3RhdHVzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHBhZ2VTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYWdlRXJyb3IoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gc2hvdyBwYWdlIGVycm9yIGZ1bmN0aW9uXHJcbmNvbnN0IHBhZ2VFcnJvciA9ICgpID0+IHtcclxuICBpZiAocGFnZXNJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgIHBhZ2VTdGF0dXMudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGJvb2sncyBwYWdlc1wiO1xyXG4gIH0gZWxzZSBpZiAocGFnZXNJbnB1dC52YWxpZGl0eS50b29TaG9ydCkge1xyXG4gICAgcGFnZVN0YXR1cy50ZXh0Q29udGVudCA9IGBJbnB1dCBzaG91bGQgYmUgYXQgbGVhc3QgJHtwYWdlc0lucHV0Lm1pbkxlbmd0aH0gY2hhcmFjdGVyczsgeW91IGVudGVyZWQgJHtwYWdlc0lucHV0LnZhbHVlLmxlbmd0aH0uYDtcclxuICB9XHJcblxyXG4gIHBhZ2VTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIsIFwiYWN0aXZlXCIpO1xyXG59O1xyXG5cclxuLy8gdGhpcyBjb2RlIGdldCB0aGUgZm9ybSBvcGVuXHJcbmFkZEJvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBmb3JtTW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxufSk7XHJcblxyXG4vLyBjbG9zZWZvcm0gZnVuY3Rpb24gdGhhdCBjbG9zZXMgdGhlIGZvcm1cclxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xyXG4gIGZvcm1Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5jbG9zZUZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybSk7XHJcblxyXG4vLyB0aGlzIGlzIHRoZSBib29rIGFycmF5IHRoYXQgc3RvcmUgYWxsIGJvb2sgdXNlciBhZGRlZCB0aHJvdWdoIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvblxyXG5jb25zdCBteUxpYnJhcnkgPSBbXTtcclxuXHJcbi8vIHRoaXMgaXMgdGhlIGNsYXNzIGRlY2xhcmF0aW9uIHRoYXQgZ2V0IGNhbGxlZCB1c2luZyB0aGUgXCJuZXdcIiBrZXl3b3JkXHJcbmNsYXNzIEJvb2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCBpc1JlYWQpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG4gICAgdGhpcy5wYWdlcyA9IHBhZ2VzO1xyXG4gICAgdGhpcy5pc1JlYWQgPSBpc1JlYWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBib29rIHByb3RvdHlwZSB0aGF0IGNoZWNrIGlmIGJvb2sgaGFzIGJlZW4gcmVhZCBvciBub3RcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuQm9vay5wcm90b3R5cGUucmVhZFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5pc1JlYWQgPT09IHRydWUpIHtcclxuICAgIHJldHVybiBcInJlYWRcIjtcclxuICB9XHJcbiAgcmV0dXJuIFwibm90IHJlYWRcIjtcclxufTtcclxuXHJcbi8vIHRoZSBmdW5jdGlvbiB0aGF0IGdldCBjYWxsZWQgd2hlbiBhZGRpbmcgYm9vayB0byB0aGUgcGFnZVxyXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIC8vIGdldHRpbmcgYWxsIGlucHV0IHZhbHVlXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS52YWx1ZTtcclxuICBjb25zdCByZWFkU3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWQtc3RhdHVzXCIpLmNoZWNrZWQ7XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yIGluc3RhbnRpYXRpb25cclxuICBjb25zdCBib29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWRTdGF0ZSk7XHJcblxyXG4gIC8vIGFkZCBpZCB0byBldmVyeSBib29rIHRoYXQgZ2V0IGFkZGVkIHRvIHRoZSBteUxpYnJhcnkgYXJyYXlcclxuICBteUxpYnJhcnkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICBpdGVtLmlkID0gaSArIDA7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNoZWNrIGlmIGZvcm0gdmFsaWRhdGlvbiBpcyBpbnZhbGlkIGFuZCBwcmV2ZW50IHRoZSBmb3JtIHRvIHN1Ym1pdFxyXG4gIGlmIChcclxuICAgICF0aXRsZUlucHV0LnZhbGlkaXR5LnZhbGlkIHx8XHJcbiAgICAhYXV0aG9ySW5wdXQudmFsaWRpdHkudmFsaWQgfHxcclxuICAgICFwYWdlc0lucHV0LnZhbGlkaXR5LnZhbGlkXHJcbiAgKSB7XHJcbiAgICB0aXRsZUVycm9yKCk7XHJcbiAgICBhdXRob3JFcnJvcigpO1xyXG4gICAgcGFnZUVycm9yKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGZvcm0gaXMgdmFsaWQgYWRkIHRoZSBib29rIHRvIG15TGlicmFyeSBhcnJheSBhbmQgZGlzcGxheSBpdCBvbiB0aGUgd2VicGFnZVxyXG4gICAgbXlMaWJyYXJ5LnB1c2goYm9vayk7XHJcbiAgICBkaXNwbGF5Qm9vayhib29rLCBib29rLmlkKTtcclxuICB9XHJcbn1cclxuXHJcbmFkZEJvb2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkQm9va1RvTGlicmFyeSk7XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Qm9vayhib29rLCBpKSB7XHJcbiAgLy8gY3JlYXRlIGJvb2sgY2FyZCBjb250YWluZXJcclxuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgLy8gdGhlIHRpdGxlIGRpc3BsYXlcclxuICBjb25zdCBwYXJhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhcmFUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgcGFyYVRpdGxlLnRleHRDb250ZW50ID0gYFRpdGxlOiAke2Jvb2sudGl0bGV9YDtcclxuXHJcbiAgLy8gdGhlIGF1dGhvciBkaXNwbGF5XHJcbiAgY29uc3QgcGFyYUF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGFyYUF1dGhvci5jbGFzc0xpc3QuYWRkKFwiYXV0aG9yXCIpO1xyXG4gIHBhcmFBdXRob3IudGV4dENvbnRlbnQgPSBgQXV0aG9yOiAke2Jvb2suYXV0aG9yfWA7XHJcblxyXG4gIC8vIHRoZSBwYWdlIGRpc3BsYXlcclxuICBjb25zdCBwYXJhUGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhcmFQYWdlcy5jbGFzc0xpc3QuYWRkKFwicGFnZXNcIik7XHJcbiAgcGFyYVBhZ2VzLnRleHRDb250ZW50ID0gYHBhZ2U6ICR7Ym9vay5wYWdlc31gO1xyXG5cclxuICAvLyBjcmVhdGUgYnV0dG9uIGRpc3BsYXlcclxuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgLy8gcmVhZCBzdGF0ZSBidXR0b24gdGhhdCB0b2dnbGUgc3RhdGVcclxuICBjb25zdCByZWFkU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHJlYWRTdGF0ZS5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLXN0YXR1c1wiLCBcImRpc3BsYXktYnRuXCIpO1xyXG4gIHJlYWRTdGF0ZS50ZXh0Q29udGVudCA9IGAke2Jvb2sucmVhZFN0YXR1cygpfWA7XHJcblxyXG4gIC8vIGRlbGV0ZSBidXR0b24gdGhhdCBkZWxldGUgYm9vayBmcm9tIHRoZSBteUxpYnJhcnkgYXJyYXkgYW5kIHRoZSBET01cclxuICBjb25zdCBkZWxldGVCb29rQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBkZWxldGVCb29rQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWwtYnRuXCIsIFwiZGlzcGxheS1idG5cIik7XHJcbiAgZGVsZXRlQm9va0J0bi50ZXh0Q29udGVudCA9IFwiZGVsZXRlIGJvb2tcIjtcclxuICBkZWxldGVCb29rQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYCR7aX1gKTtcclxuXHJcbiAgYnRuQ29udGFpbmVyLmFwcGVuZChyZWFkU3RhdGUsIGRlbGV0ZUJvb2tCdG4pO1xyXG5cclxuICAvLyBhcHBlbmQgYWxsIGRpc3BsYXkgYW5kIGJ1dHRvbiB0byBjYXJkIGNvbnRhaW5lclxyXG4gIGNhcmRDb250YWluZXIuYXBwZW5kKHBhcmFUaXRsZSwgcGFyYUF1dGhvciwgcGFyYVBhZ2VzLCBidG5Db250YWluZXIpO1xyXG5cclxuICAvLyBhcHBlbmQgY2FyZCBjb250YWluZXIgdG8gZGlzcGxheSBET01cclxuICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xyXG5cclxuICAvLyBjbG9zZSBmb3JtIGFmdGVyIHRoZSBib29rIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSB3ZWJwYWdlXHJcbiAgY2xvc2VGb3JtKCk7XHJcblxyXG4gIC8vIHJlc2V0IGZvcm0gYWZ0ZXIgdGhlIGJvb2sgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHdlYnBhZ2VcclxuICBhZGRCb29rRm9ybS5yZXNldCgpO1xyXG5cclxuICAvLyByZWFkIHN0eWxlIG1ldGhvZCB0aGF0IGNoZWNrIGZvciBjaGVja2JveCBpbnB1dFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXHJcbiAgQm9vay5wcm90b3R5cGUucmVhZFN0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuaXNSZWFkID09PSB0cnVlKSB7XHJcbiAgICAgIHJlYWRTdGF0ZS5jbGFzc0xpc3QuYWRkKFwicmVhZFwiKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JlYWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJlYWRTdGF0ZS5jbGFzc0xpc3QuYWRkKFwibm90LXJlYWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBib29rLnJlYWRTdHlsZSgpO1xyXG5cclxuICAvLyBjaGFuZ2Ugc3RhdHVzXHJcbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGFuZ2Utc3RhdHVzXCIpO1xyXG5cclxuICBjaGFuZ2VTdGF0dXMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmIChyZWFkU3RhdGUudGV4dENvbnRlbnQgPT09IFwicmVhZFwiKSB7XHJcbiAgICAgICAgcmVhZFN0YXRlLnRleHRDb250ZW50ID0gXCJub3QgcmVhZFwiO1xyXG4gICAgICAgIHJlYWRTdGF0ZS5jbGFzc0xpc3QuYWRkKFwibm90LXJlYWRcIik7XHJcbiAgICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWFkXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlYWRTdGF0ZS50ZXh0Q29udGVudCA9PT0gXCJub3QgcmVhZFwiKSB7XHJcbiAgICAgICAgcmVhZFN0YXRlLnRleHRDb250ZW50ID0gXCJyZWFkXCI7XHJcbiAgICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJyZWFkXCIpO1xyXG4gICAgICAgIHJlYWRTdGF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwibm90LXJlYWRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBkZWxldGUgYm9va3NcclxuICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWwtYnRuXCIpO1xyXG5cclxuICBkZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGJ0bi5kYXRhc2V0LmlkO1xyXG5cclxuICAgICAgbXlMaWJyYXJ5LnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICBidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9