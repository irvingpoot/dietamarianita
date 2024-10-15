// api/tasks.js
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'tasks.txt'); // Cambia aquí si 'tasks.txt' está en otro lugar

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            // Obtener las tareas
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return res.status(500).json({ error: 'Error leyendo las tareas.' });
                }
                const tasks = data ? JSON.parse(data) : [];
                res.status(200).json(tasks);
            });
            break;

        case 'POST':
            // Agregar una tarea
            const newTask = req.body.task;
            fs.readFile(filePath, 'utf8', (err, data) => {
                const tasks = data ? JSON.parse(data) : [];
                tasks.push({ task: newTask, completed: false });
                fs.writeFile(filePath, JSON.stringify(tasks), err => {
                    if (err) {
                        return res.status(500).json({ error: 'Error al agregar la tarea.' });
                    }
                    res.status(201).json({ message: 'Tarea agregada' });
                });
            });
            break;

        case 'DELETE':
            // Completar o eliminar una tarea
            const { task } = req.body;
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return res.status(500).json({ error: 'Error leyendo las tareas.' });
                }
                let tasks = JSON.parse(data);
                tasks = tasks.filter(t => t.task !== task); // Filtra las tareas eliminando la completada

                fs.writeFile(filePath, JSON.stringify(tasks), err => {
                    if (err) {
                        return res.status(500).json({ error: 'Error al eliminar la tarea.' });
                    }
                    res.status(200).json({ message: 'Tarea eliminada' });
                });
            });
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
            res.status(405).end(`Método ${req.method} no permitido`);
    }
}
