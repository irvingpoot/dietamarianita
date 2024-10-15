const express = require('express');
const serverless = require('serverless-http');
const app = express();
const PORT = 3000;
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'tasks.txt'); // Ajusta la ruta a tu archivo

exports.handler = async (event) => {
    switch (event.httpMethod) {
        case 'GET':
            // Obtener las tareas
            return new Promise((resolve, reject) => {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        return resolve({
                            statusCode: 500,
                            body: JSON.stringify({ error: 'Error leyendo las tareas.' }),
                        });
                    }
                    const tasks = data ? JSON.parse(data) : [];
                    resolve({
                        statusCode: 200,
                        body: JSON.stringify(tasks),
                    });
                });
            });

        case 'POST':
            // Agregar una tarea
            const newTask = JSON.parse(event.body).task;
            return new Promise((resolve, reject) => {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    const tasks = data ? JSON.parse(data) : [];
                    tasks.push({ task: newTask, completed: false });
                    fs.writeFile(filePath, JSON.stringify(tasks), (err) => {
                        if (err) {
                            return resolve({
                                statusCode: 500,
                                body: JSON.stringify({ error: 'Error al agregar la tarea.' }),
                            });
                        }
                        resolve({
                            statusCode: 201,
                            body: JSON.stringify({ message: 'Tarea agregada' }),
                        });
                    });
                });
            });

        case 'DELETE':
            // Completar o eliminar una tarea
            const { task } = JSON.parse(event.body);
            return new Promise((resolve, reject) => {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        return resolve({
                            statusCode: 500,
                            body: JSON.stringify({ error: 'Error leyendo las tareas.' }),
                        });
                    }
                    let tasks = JSON.parse(data);
                    tasks = tasks.filter((t) => t.task !== task); // Filtra las tareas eliminando la completada

                    fs.writeFile(filePath, JSON.stringify(tasks), (err) => {
                        if (err) {
                            return resolve({
                                statusCode: 500,
                                body: JSON.stringify({ error: 'Error al eliminar la tarea.' }),
                            });
                        }
                        resolve({
                            statusCode: 200,
                            body: JSON.stringify({ message: 'Tarea eliminada' }),
                        });
                    });
                });
            });

        default:
            return {
                statusCode: 405,
                body: JSON.stringify({ error: `Método ${event.httpMethod} no permitido` }),
            };
    }
};