require('dotenv').config(); // Cargar las variables de entorno del archivo .env
const express = require('express');
const app = express();
const port = 3000;
const { Pool } = require('pg');
const cors= require('cors');
const jwt= require('jsonwebtoken');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
// Configurar la conexión a la base de datos
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'usuario',
  user: 'postgres',
  password: 'Mermelada04',
});


// Ruta
app.get('/', async (req, res) => {
  res.send("Server funcionando");
  
});

app.post('/login', async (req, res) => {
  res.send("Server funcionando");
  const {username_usuario, password_usuario} = req.body;
  try{
        const query= ` SELECT * FROM usuario WHERE username_usuario=$1 AND password_usuario=$2 `;
        //Declaracion resultado
        const result= await pool.query(query,[username_usuario,password_usuario]);
        //Condicion para crear el token
        if(result.rowCount ===1){
          const usuario= result.rows[0];
          //Generacion de token
          const token= jwt.sign(
            { id_usuario: usuario.id_usuario, username_usuario : usuario.username_usuario, password_usuario: usuario.password_usuario}, 'mermelada', {expiresIn: '5m'}
                );
                //return res.status(200).json({'message': `Bienvenido ${id_usuario} ${token};
            console.log(result);
            //Res en formato JSON
            res.json({token, usuario:result.rows[0]});
          } else{
            return res.status(401).json({"error":"Usuario o contraseña incorrectos"});
          }
          
}catch{
    throw error;
    }
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
