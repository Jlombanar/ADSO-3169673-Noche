
import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import { conectarDB } from './db/db.js';
import userRoutes from './routes/user.js';
import  loginUser  from './routes/login.js';

dotenv.config();

const app = express();

conectarDB();

const PORT =  3000;


// 🔥 IMPORTANTE
app.use(express.json());


//RUTA PRINCIPAL//

app.get('/', (req, res) => {

 res.send({mensaje: 'Bienvenido a mi API REST'

    });
});
   
//RUTAS//
app.use('/usuarios', userRoutes);

app.use('/login', loginUser);



//SERVIDOR//
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
