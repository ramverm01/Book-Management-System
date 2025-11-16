const API_URL = "http://localhost:8080/books";

window.onload = function () {
    loadBooks();
};

function loadBooks() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            let tableBody = document.querySelector("#bookTable tbody");
            tableBody.innerHTML = ""; 

            data.forEach(book => {
                let row = `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.price}</td>
                        <td>
                            <button class="delete-btn" onclick="deleteBook(${book.id})">Delete</button>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        });
}

function addBook() {
    let book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        price: parseFloat(document.getElementById("price").value)
    };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
    })
        .then(() => {
            alert("Book Added!");
            loadBooks(); 
        });
}


function deleteBook(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            alert("Book Deleted!");
            loadBooks(); 
        });
}
