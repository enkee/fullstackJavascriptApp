//Requerir dotenv
if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

//Definimos las variables para el servidor.
const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require('cors');

// Inicializaciones
const app = express(); //creamos el servidor.
require('./database');

// Settings
app.set("port", process.env.PORT || 3000); //creamos una variable para el puerto.

// Middlewares

/*Morgan*/
app.use(morgan("dev"));

//Cors
app.use(cors());

/*Multer*/
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename(req, file, cb) {
      cb(null, new Date().getTime() + path.extname(file.originalname));
  }
})
app.use(multer({storage}).single('image'));


/*Urlencode* Interpreta los datos del formulario como si fuera un json, y valores json */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/books", require("./routes/books"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Comenzar el Servidor
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
