import {config} from 'dotenv';
//Con este metodo cargamos las variables de entorno
config();

export default {
    mongodb_URL: process.env.MONGODB_URI
};  