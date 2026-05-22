import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

//creamos el controlador de login//
export const loginUser = async (req, res) => { 

    try {
        const { email, password } = req.body;
      //validamos los campos
        if (!email || !password) {
            return res.status(400).json({ msg: 'porfavor ingrese su correo y su contraseña' });
        }

//buscamos el usuario en la base de datos //

const user = await User.findOne({ email });

if (!user) {
    return res.status(400).json({ msg: 'Usuario no encontrado' });
}
//validamos la contraseña//
const esValida=await bcrypt.compare(password, user.password);

if (!esValida) {
    return res.status(400).json({ msg: 'Contraseña incorrecta' });
}

//genewramos el token de autenticacion//

const token=jwt.sign({
    id:user.id,email:user.email},
    process.env.JWT_SECRET,
    {expiresIn:"1h"}
);

//respondemos con el token de autenticacion//
 
res.status(200).json({
    message: 'Login exitoso' ,
    token:token,
    usuario:{
        _id:user._id,
        email:user.email,
        apellido:user.apellido,
        nombre:user.nombre,
        rol:user.rol
        
    }
});


      } catch (error){
        res.status(500).json({message:"error del login", error:error.message})
      }
          
    
}; 