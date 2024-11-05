// Filtrer les tâches par état
function filterTasks(filter) {
    const filteredTasks = filter === 'completed' ? tasks.filter(task => task.completed) :
                          filter === 'uncompleted' ? tasks.filter(task => !task.completed) :
                          tasks;
    displayTasks(filteredTasks);
}