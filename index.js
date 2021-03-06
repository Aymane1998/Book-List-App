//Book Class : Represents a Book
class Book{
    constructor(title,author, isbn){
        this.title=title;
        this.author=author;
        this.isbn= isbn;
    }
}

// UI Class : Handle UI Tasks
class UI {
    static displayBooks(){
        const StoredBooks= [
            {
                title:'Book One',
                author:'John Doe',
                isbn:'3434434'
            },
            {
                title:'Book Two',
                author:'Jane Dep',
                isbn:'455445'
            }

        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list= document.querySelector('#book-list');
        const row = document.createElement('tr');

        // ici je prends le row (tr) et j'ajoute le titre,auteur,isbn du livre donné
        row.innerHTML= `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt"></i></a></td>
        `;

        list.appendChild(row);
    }
}

//Store Class : Handles Storage


// Event : Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : Add a Book



document.querySelector('#book-form').addEventListener('submit',(e)=>{
    //Prevent actual submit
    e.preventDefault();

    // Get from values
    const title= document.querySelector('#title').value;
    const author= document.querySelector('#author').value;
    const isbn= document.querySelector('#isbn').value;

    // Instatiate book(ghadi n créer objet mn la classe Book li sayebt lfooq)
    const book = new Book(title, author, isbn);

    

});

// Event : Remove a  Book