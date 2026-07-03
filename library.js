class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.status = "Available";
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        let book = new Book(title, author);
        this.books.push(book);
        this.displayBooks();
    }

    issueBook(index) {
        this.books[index].status = "Issued";
        this.displayBooks();
    }

    returnBook(index) {
        this.books[index].status = "Available";
        this.displayBooks();
    }

    deleteBook(index) {
        this.books.splice(index,1);
        this.displayBooks();
    }

    displayBooks() {

        let list = document.getElementById("bookList");
        list.innerHTML = "";

        this.books.forEach((book,index)=>{

            list.innerHTML += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.status}</td>
                <td>
                    ${
                        book.status==="Available"
                        ? `<button class="issue" onclick="library.issueBook(${index})">Issue</button>`
                        : `<button class="return" onclick="library.returnBook(${index})">Return</button>`
                    }

                    <button class="delete" onclick="library.deleteBook(${index})">Delete</button>
                </td>
            </tr>
            `;
        });

    }
}

const library = new Library();

function addBook(){

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    if(title==="" || author===""){
        alert("Please enter all details.");
        return;
    }

    library.addBook(title,author);

    document.getElementById("title").value="";
    document.getElementById("author").value="";
}