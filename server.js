const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const filePath = path.join(__dirname, 'tasks.txt');

// Obtener las tareas
app.get('/tasks', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error leyendo las tareas.' });
        }
        const tasks = data ? JSON.parse(data) : [];
        res.json(tasks);
    });
});

// Agregar una tarea
app.post('/tasks', (req, res) => {
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
});

// Completar o eliminar una tarea
app.delete('/tasks', (req, res) => {
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
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
