// Book Class: Represents a book
class Book {
    constructor (title, Author, ISBN) {
        this.title=title;
        this.Author=Author;
        this.ISBN=ISBN;
    }
}
// UI Class: Handle UI Tasks 
class UI{
    static displayBooks() {
        const StoredBooks = [
        {
            title:'Book One',
            Author: 'John Doe',
            ISBN: '3434434'
        },
        {
            title: 'Book Two',
            Author: 'Jane Doe',
            ISBN: '45545'
       }
    ]; 

    const books = StoredBooks;
    books.forEach((book) => UI.addBookToList(book));
}
    static addBookToList(book) {
        const list= document.querySelector('#book-list');

        const row= document.createElement('tr');

        row.innerHTML= `
        <td>${book.title}</td>
        <td>${book.Author}</td>
        <td>${book.ISBN}</td>
        <td><a href= "#" class= "btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields(){
        document.querySelector('#title').vallue= '';
        document.querySelector('#Author').vallue= '';
        document.querySelector('#ISBN').vallue= '';

    }
}



// Store Class: Handles Storage 

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks); 

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit',(e)=> {
    // Prevent actual submit
    e.preventDefault();

    //Get form values
    const title =document.querySelector('#title').value; 
    const Author =document.querySelector('#Author').value; 
    const ISBN =document.querySelector('#ISBN'). value; 

    //Validate
    if (title==='' || Author===''|| ISBN==='') {
        alert('Please fill in all fields')
    }  else{

//Instatiate book
const book= new Book (title, Author, ISBN);

console.log(book)


// Add Book to UI
UI.addBookToList(Book);

//Clear fields
UI.clearFields();
    }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
   UI.deleteBook(e.target)
});