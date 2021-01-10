import express from 'express';
//Para poder ver las peticiones
import morgan from 'morgan';
import cors from 'cors';
import TasksRoutes from './routes/tasks.routes';

const app = express();

//Confg
app.set('port', process.env.PORT || 3000);
//Midddlewares
app.use(morgan('dev'));
//Con cors podemos configurar el acceso a las peticiones de la API, si se deja en blanco cualquiera puede acceder.
//Para configurarlo solo debemos usar un JSON con el atributo origin para especificar la ruta de donde se pueden 
//Hacer peticiones
const corsOptions = {}
app.use(cors(corsOptions));
app.use(express.json());
//Para que tambien admita peticiones mediante html
app.use(express.urlencoded({ extended: false }));
//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my application' })
})

app.use('/api/tasks', TasksRoutes);

export default app;