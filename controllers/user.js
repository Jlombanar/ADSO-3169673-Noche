import user from '../models/user.js';

// crear un nuevo usuario//
export const registrarUsers= async (req, res) => {
 try {
    const {nombre, apellido, email, password} = req.body;
    
    //validamos que todos los campos sean obligatorios//
    if (!nombre || !apellido || !email || !password) {
        return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
    }

//validamos si el usuario ya existe//
    
    const existeUser = await user.findOne({
        email
    });
            
    if (existeUser) {
        return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    //creamos el nuevo usuario//
    const nuevoUser = new user({
        nombre,
        apellido,
        email,
        password
    });

    //guardamos el nuevo usuario en la base de datos//
    await nuevoUser.save();
    res.status(201).json({ msg: 'Usuario registrado correctamente' });


 }   catch (error) {
    res.status(500).json({ msg: 'Error al registrar el usuario' });

 }

};