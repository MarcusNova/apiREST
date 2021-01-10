import { Router } from 'express';
import * as TaskCtrl from '../controllers/task.controller';

//Importamos Router de Express ya que de esta forma podemos definir la agrupacion de rutas
const router = Router();

router.post('/', TaskCtrl.createTask);

router.get('/paginate', TaskCtrl.findPaginateTask);

router.get('/', TaskCtrl.findAllTasks);

router.get('/done', TaskCtrl.findDoneTasks);

router.get('/:id', TaskCtrl.findById);

router.delete('/:id', TaskCtrl.deleteTask);

router.put('/:id', TaskCtrl.updateTask);

export default router;