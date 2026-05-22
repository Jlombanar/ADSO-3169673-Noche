import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({

    nombre: {type: String, required: true, uppercase: true, trim: true},
    apellido: {type: String, required: true, uppercase: true, trim: true},
    email: {type: String, required: true, unique: true, lowercase: true, trim: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['ADMIN', 'INSTRUCTOR', 'APRENDIZ'], default: 'APRENDIZ'},
    
},{ timestamps: true });


// encriptar contraseña antes de guardar el usuario// 

userSchema.pre('save', async function (next) {  
    //solo encriptamos la contraseña si ha sido modificada o es nueva//
    if (!this.isModified('passwords'))return;
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.passwords, salt);
    });

    const user = mongoose.model('User', userSchema);

    export default user;