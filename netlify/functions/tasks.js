const fs = require('fs');
const path = require('path');

// Define the path for the tasks file
const filePath = path.join(__dirname, 'tasks.txt');

exports.handler = async (event, context) => {
    // Check the HTTP method to determine action
    if (event.httpMethod === 'GET') {
        // Read the tasks
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            const tasks = data ? JSON.parse(data) : [];
            return {
                statusCode: 200,
                body: JSON.stringify(tasks),
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Error reading tasks.' }),
            };
        }
    } else if (event.httpMethod === 'POST') {
        // Add a new task
        const newTask = JSON.parse(event.body).task;
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            const tasks = data ? JSON.parse(data) : [];
            tasks.push({ task: newTask, completed: false });
            fs.writeFileSync(filePath, JSON.stringify(tasks));
            return {
                statusCode: 201,
                body: JSON.stringify({ message: 'Task added' }),
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Error adding task.' }),
            };
        }
    } else if (event.httpMethod === 'DELETE') {
        // Delete a task
        const { task } = JSON.parse(event.body);
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            const tasks = data ? JSON.parse(data) : [];
            const updatedTasks = tasks.filter(t => t.task !== task);
            fs.writeFileSync(filePath, JSON.stringify(updatedTasks));
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Task deleted' }),
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Error deleting task.' }),
            };
        }
    }

    return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method not allowed' }),
    };
};
