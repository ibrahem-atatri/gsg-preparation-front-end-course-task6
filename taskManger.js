
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let id = parseInt(localStorage.getItem('id')) || 1; 
let managerTasks = tasks;

function printMenu() {
    console.log("Task Manager Menu");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Toggle Task Completion");
    console.log("4. Edit Task");
    console.log("5. Delete Task");
    console.log("6. Exit");
}

function addTask() {
    let taskDescription = prompt("Enter The Task Description");
    managerTasks.push({
        id: id,
        taskDescription: taskDescription,
        status: 0
    });
    id++;
    localStorage.setItem('id', id.toString());
    localStorage.setItem('tasks', JSON.stringify(managerTasks));
}

function viewTasks() {
    managerTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (managerTasks.length === 0)
        console.log("There is no task to do.");
    else
        managerTasks.forEach((task) => {
            console.log(`${task.id}. ${task.taskDescription} [${task.status == 0 ? 'Not Completed' : 'Completed'}]`);
        });
}

function toggleTaskCompletion() {
    managerTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let taskID = parseInt(prompt("Enter the task ID to toggle completion"));
    let taskIndex = managerTasks.findIndex((task) => task.id === taskID);
    
    if (taskIndex === -1) {
        console.log("Invalid task ID");
    } else {

            if(managerTasks(taskIndex).status == 0){
        managerTasks(taskIndex).status = 1;
        console.log(`Task "${managerTasks(taskIndex).taskDescription}" is now marked as Completed`);
        
    } else {
        managerTasks(taskIndex).status = 0;
        console.log(`Task "${managerTasks(taskIndex).taskDescription}" is now marked as unCompleted`);
    }

    }
    
    localStorage.setItem('tasks', JSON.stringify(managerTasks));
}

function editTask() {
    managerTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let taskID = parseInt(prompt("Enter the task ID to edit"));
    let taskIndex = managerTasks.findIndex((task) => task.id === taskID);
    
    if (taskIndex === -1) {
        console.log("Invalid task ID");
    } else {
        let newDescription = prompt("Enter the new description");
        managerTasks[taskIndex].taskDescription = newDescription;
        console.log("Task description updated.");
    }
    
    localStorage.setItem('tasks', JSON.stringify(managerTasks));
}

function deleteTask() {
    managerTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let taskID = parseInt(prompt("Enter the task ID to delete"));
    let taskIndex = managerTasks.findIndex((task) => task.id === taskID);
    
    if (taskIndex === -1) {
        console.log("Invalid task ID");
    } else {
        let description = managerTasks[taskIndex].taskDescription;
        managerTasks.splice(taskIndex, 1);
        console.log(`Task deleted: "${description}"`);
    }
    
    localStorage.setItem('tasks', JSON.stringify(managerTasks));
}

printMenu();
let option = parseInt(prompt("Enter Your Choice (1-6)"));

while (option !== 6) {
    switch (option) {
        case 1:
            addTask();
            break;
        case 2:
            viewTasks();
            break;
        case 3:
            toggleTaskCompletion();
            break;
        case 4:
            editTask();
            break;
        case 5:
            deleteTask();
            break;
        default:
            console.log("Your choice is invalid. Please choose from 1-6.");
            break;
    }
    printMenu();
    option = parseInt(prompt("Enter Your Choice (1-6)"));
}

console.log("good bye");
