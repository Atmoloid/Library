const add = document.getElementById("add-books");

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

    
    document.body.appendChild(sheet);
}

add.addEventListener("click", bookInfo);