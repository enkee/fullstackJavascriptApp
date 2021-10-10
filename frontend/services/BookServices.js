class BookServices{

    constructor(){
        //Direccion de la API (backend)
        this.URI = "http://localhost:3000/api/books";
    }

        //METODOS

        async getBooks(){
            const response = await fetch(this.URI);
            //Convertimos la respuesta a un json
            const books = await response.json();
            return books;
        }

        async postBook(book){
            const res = await fetch(this.URI,{
                method: 'POST',
                body: book,
            });
            const data = await res.json();
            console.log(data);
        }

        async deleteBook(bookId) {
            const res = await fetch(`${this.URI}/${bookId}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'Delete'
            });
            const data = await res.json();
            console.log(data);
        }

    }
    export default BookServices;