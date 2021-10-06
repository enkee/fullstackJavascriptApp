//Usamos mongoose para crear la conexion a la base de datos MONGO
const mongoose = require('mongoose');


//Usamos el metodo Connect del modulo mongoose con la variable de entorno de la cadena de conexión
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true 
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));