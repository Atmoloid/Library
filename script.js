const add = document.getElementById("add-books");

function bookInfo(){
    const sheet = document.createElement("div");

    sheet.style.width = '80px';
    sheet.style.height = '80px';

    sheet.style.backgroundColor = 'white';
}

add.addEventListener("click", bookInfo());