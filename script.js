document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    function addTask(taskText) {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskTextElement = document.createElement('li');
        taskTextElement.textContent = taskText;
        task.appendChild(taskTextElement);

        const completeButton = createButton('complete-button', 'fa-check');
        completeButton.addEventListener('click', () => {
            taskTextElement.style.textDecoration = 'line-through';
            taskTextElement.style.textDecorationColor = '#4CAF50'; 
            taskTextElement.style.textDecorationThickness = '3px'; 
        });
        task.appendChild(completeButton);

        const editButton = createButton('edit-button', 'fa-edit');
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit your task', taskTextElement.textContent);
            if (newText !== null) {
                taskTextElement.textContent = newText.trim();
            }
        });
        task.appendChild(editButton);

        const deleteButton = createButton('delete-button', 'fa-trash');
        deleteButton.addEventListener('click', () => {
            task.remove();
        });
        task.appendChild(deleteButton);

        taskList.appendChild(task);
    }

    function createButton(className, iconClass) {
        const button = document.createElement('button');
        button.classList.add(className);
    
        const icon = document.createElement('i');
        icon.classList.add('fas', iconClass);
    
        button.appendChild(icon);
        return button;
    }
});

// learn new programming language
// work on personal project
// fix the bugs from the code
// 