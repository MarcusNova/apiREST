import express, { json } from 'express';
import TasksRoutes from './routes/tasks.routes';

const app = express();

//Confg
app.set('port', process.env.port || 3000);

app.use(express.json());
//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my application' })
})

app.use('/api/tasks' , TasksRoutes);

export default app;