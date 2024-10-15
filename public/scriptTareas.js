document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const todoForm = document.getElementById('todo-form');
    const newTaskInput = document.getElementById('new-task');

    // Cargar tareas al cargar la página
    fetch('/.netlify/functions/tasks') // Cambiar a la ruta de Netlify Functions
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach(task => {
                renderTask(task);
            });
        });

    // Manejar la creación de nuevas tareas
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = newTaskInput.value.trim();
        if (newTask) {
            fetch('/.netlify/functions/tasks', { // Cambiar a la ruta de Netlify Functions
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task: newTask }),
            }).then(() => {
                renderTask({ task: newTask, completed: false });
                newTaskInput.value = '';
            });
        }
    });

    function renderTask(task) {
        const li = document.createElement('li');
        li.classList.add('task-item'); // Nueva clase para los estilos
        li.innerHTML = `
            <span class="task-text">${task.task}</span>
            <button class="complete-btn">✔</button>
        `;
        taskList.appendChild(li);
    
        // Marcar como completada y eliminar la tarea
        li.querySelector('.complete-btn').addEventListener('click', () => {
            fetch('/.netlify/functions/tasks', { // Cambiar a la ruta de Netlify Functions
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task: task.task }),
            }).then(() => {
                li.remove(); // Eliminar la tarea del DOM
            });
        });
    }
});

