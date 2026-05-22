import express from 'express';
import { loginUser } from '../controllers/login.js';

const router=express.Router();

//ruta para el login de usuarios//

router.post ("/",loginUser);
export default router;
