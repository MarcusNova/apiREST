export const findAllTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
}