import { Router } from 'express';
import Task from '../models/Task';


//Importamos Router de Express ya que de esta forma podemos definir la agrupacion de rutas
const router = Router();

router.get('/', )

router.post('/', async (req, res) => {
    const newTask = new Task({ title: req.body.title, description: req.body.description });
    const taskSave = await newTask.save();
    res.json(taskSave);

})
export default router;