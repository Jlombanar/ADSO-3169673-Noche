## 💻 Proyecto de gimnasio jlombanar

## Proyecto desarrollado para ejercer una vida saludable con ejercicios practicos 

## 🛠️ Stack Tecnológico 
** Node express
** Mongo db
** Fluterr

## Arquitectura 
mi-proyecto/
│
├── node_modules/
│
├── src/
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── supabase.js
│   │   └── env.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── productController.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   └── productModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── productRoutes.js
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── validateToken.js
│   │   └── errorHandler.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── userService.js
│   │   └── productService.js
│   │
│   ├── helpers/
│   │   ├── bcrypt.js
│   │   ├── jwt.js
│   │   └── response.js
│   │
│   ├── utils/
│   │   ├── validator.js
│   │   └── logger.js
│   │
│   ├── uploads/
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

