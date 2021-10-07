//Importamos el Metodo Router de Express
const { Router } = require("express");
//Guardamos en una constante el Objeto generado por el Metodo Roter.
const router = Router();
//Importamos el Modelo Books
const Book = require("../models/Book");

//Creamos la Rutas
/* Ruta Inicial */
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});
/* Ruta listar books */
router.post("/", async (req, res) => {
  const { title, author, isbn } = req.body;
  const imagePath = '/uploads/' + req.file.filename;
  const newBook = new Book({ title, author, isbn, imagePath });
  await newBook.save();
  res.json({ message: "Book Saved" });
});
/* Ruta eliminar book */
router.delete("/:id", async (req, res) => {
  await Book.findOneAndDelete(req.params.id);
  res.json({message: 'Book Deleted'});
});

module.exports = router;
