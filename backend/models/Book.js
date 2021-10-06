const { Schema, model } = require("mongoose");

/* Modelo de la Tabla */
const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  imagePath: { type: String },
  create_at: { type: Date, default: Date.now },
});

module.exports = model("Book", BookSchema);
