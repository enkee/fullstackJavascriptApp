import './styles/styles.css';

import BookService from './services/BookServices';

document.getElementById('book-form')
    .addEventListener('submit', e =>{
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        //Creamos un dato de formulario para mandar los datos del formulario html
        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);

        const bookService = new BookService();
        bookService.postBook(formData);

        e.preventDefault();
    });