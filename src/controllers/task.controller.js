import Task from '../models/Task';
import { getPagination } from '../libs/getPagination';


export const findPaginateTask = async (req, res) => {
    const { size, page, title } = req.query;

    const { limit, offset } = getPagination(page, size);
    const condition = title ? {
        title: { $regex: new RegExp(title), $options: "i" }
    } : {};
    //Paginate recibe una consulta de lo que quiere buscar y luego recibe opciones para el formato que usaremos
    const data = await Task.paginate(condition, { offset, limit });
    res.json({
        totalItems: data.totalDocs,
        tasks: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page
    });
}

export const findAllTasks = async (req, res) => {
    //En este caso utilizamos los try catch pero existen librerias tambien para el manejo de erorres
    //Una de las librerias es express validator
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error || "Something goes wrong, please try again"
        });
    }
}

export const createTask = async (req, res) => {
    if (!req.body.title) {
        res.status(400).json({
            message: "Title can not be empty"
        })
    }
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        });
        const taskSave = await newTask.save();
        res.json(taskSave);
    } catch (error) {
        res.status(500).json({
            message: error || "Something goes wrong, please try again"
        });
    }

}
export const findDoneTasks = async (req, res) => {
    const tasks = await Task.find({ done: true });
    res.json(tasks);
}

export const findById = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
}

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        message: "Task was deleted succesfully"
    })
}

export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: "Task was updated succesfully"
    })
}