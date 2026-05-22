import express from 'express';
//importamos el controlador de usuarios//
import { registrarUsers } from '../controllers/user.js';

const router= express.Router();

    //ruta registrar //

router.post('/registrer', registrarUsers);
export default router;


