const add = document.getElementById("add-books");
const booksContainer = document.getElementById("books-container");
const bookContainer = [];

function bookInfo(){
    const sheet = document.createElement("div");

    sheet.style.width = '300px';
    sheet.style.height = '500px';

    sheet.style.backgroundColor = 'white';
    sheet.style.border = '2px solid black';
    sheet.style.zIndex = '999';
    sheet.style.borderRadius = '15px';

    sheet.style.position = 'fixed';
    sheet.style.top = '50%';
    sheet.style.left = '50%';
    sheet.style.transform = 'translate(-50%, -50%)';

     
     const bookNameInput = document.createElement("input");
     bookNameInput.type = "text";
     bookNameInput.placeholder = "Book Name";
     bookNameInput.style.display = "block";
     bookNameInput.style.margin = "20px auto";
     bookNameInput.style.width = "80%";
     bookNameInput.style.padding = "10px";
     bookNameInput.style.border = "1px solid black";
     bookNameInput.style.borderRadius = "5px";
     
     
     const authorInput = document.createElement("input");
     authorInput.type = "text";
     authorInput.placeholder = "Author";
     authorInput.style.display = "block";
     authorInput.style.margin = "20px auto";
     authorInput.style.width = "80%";
     authorInput.style.padding = "10px";
     authorInput.style.border = "1px solid black";
     authorInput.style.borderRadius = "5px";
 
     
     const pagesInput = document.createElement("input");
     pagesInput.type = "number";
     pagesInput.placeholder = "Page number";
     pagesInput.style.display = "block";
     pagesInput.style.margin = "20px auto";
     pagesInput.style.width = "80%";
     pagesInput.style.padding = "10px";
     pagesInput.style.border = "1px solid black";
     pagesInput.style.borderRadius = "5px";
 
     const nextBtn = document.createElement("button");
     nextBtn.textContent = "Next";
     nextBtn.id = "next-button";
     nextBtn.style.backgroundColor = "black";
     nextBtn.style.color = "white";
     nextBtn.style.borderRadius = "5px";
     nextBtn.style.width = "40%";
     nextBtn.style.height = "10%";
     nextBtn.style.position = "absolute";
     nextBtn.style.bottom = "10px";
     nextBtn.style.right = "10px";

     nextBtn.addEventListener("click", () => {
        const Book = {
            Title: bookNameInput.value,
            Author: authorInput.value,
            Pages: pagesInput.value,
        };

        bookContainer.push(Book); 
        renderBook(Book); 
        document.body.removeChild(sheet);   
    });

     sheet.appendChild(nextBtn);
     sheet.appendChild(bookNameInput);
     sheet.appendChild(authorInput);
     sheet.appendChild(pagesInput);
    document.body.appendChild(sheet);
}

function renderBook(book){
    const bookSheet = document.createElement("div");
    bookSheet.style.backgroundColor = "pink";
    bookSheet.style.width = "150px";
    bookSheet.style.height = "200px";
    bookSheet.style.border = "1px solid black";
    bookSheet.style.borderRadius = "5px";
    bookSheet.style.margin = "10px";
    bookSheet.style.display = "flex";
    bookSheet.style.flexDirection = "column";
    bookSheet.style.justifyContent = "space-between";
    bookSheet.style.alignItems = "center";
    booksContainer.style.display = "grid";
    booksContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(150px, 1fr))";
    booksContainer.style.Gap = "10px"; 
    booksContainer.style.justifyContent = "start"; 
    booksContainer.style.alignItems = "start";
    booksContainer.style.padding = "10px";

    const titleBook = document.createElement("h3");
    titleBook.textContent = `${book.Title}`;
    titleBook.style.display = "flex";
    titleBook.style.justifyContent = "center";
    titleBook.style.alignItems = "start";
    
    const authorName = document.createElement("h3");
    authorName.textContent = `${book.Author}`;
    authorName.style.display = "flex";
    authorName.style.justifyContent = "center";
    authorName.style.alignItems = "center";

    const pageNumber = document.createElement("h3");
    pageNumber.textContent = `${book.Pages} pages`;
    pageNumber.style.display = "flex";
    pageNumber.style.justifyContent = "flex-end";
    pageNumber.style.alignItems = "center";

    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.backgroundColor = "white";
    removeBtn.style.borderRadius = "5px";
    removeBtn.style.width = "70px";
    removeBtn.style.height = "30px";
    removeBtn.style.display = "flex";
    removeBtn.style.justifyContent = "center";
    removeBtn.style.alignItems = "center";
    
    removeBtn.addEventListener("click", () => {
        booksContainer.removeChild(bookSheet);
    });

    
    bookSheet.appendChild(titleBook);
    bookSheet.appendChild(authorName);
    bookSheet.appendChild(pageNumber);
    booksContainer.appendChild(bookSheet);
    bookSheet.appendChild(removeBtn);
}

add.addEventListener("click", bookInfo);