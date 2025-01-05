const add = document.getElementById("add-books");

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

        bookContainer.push(Book); // Aggiungi l'oggetto all'array globale
        console.log(bookContainer); // Debug: mostra l'array nella console
        document.body.removeChild(sheet); // Rimuovi il foglio
    });

     sheet.appendChild(nextBtn);
     sheet.appendChild(bookNameInput);
     sheet.appendChild(authorInput);
     sheet.appendChild(pagesInput);
    document.body.appendChild(sheet);
}

add.addEventListener("click", bookInfo);