import express from 'express';
import cors from 'cors';
import morgan from 'morgan'

//crear una instancia de express
const app = express();
//configurar un puerto
app.set('port', process.env.PORT || 4000);

app.listen( app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port'))
})

//midlewares: funciones que se ejecutan antes de las rutas
app.use(cors()); //permite conexiones remotas

//permiten interpretar el formato json
app.use(express.json());
app.use(express.urlencoded({extends:true}))

//rutas