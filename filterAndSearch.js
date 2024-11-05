// Filtrer les tâches par état
function filterTasks(filter) {
    const filteredTasks = filter === 'completed' ? tasks.filter(task => task.completed) :
                          filter === 'uncompleted' ? tasks.filter(task => !task.completed) :
                          tasks;
    displayTasks(filteredTasks);
}
// Filtrer les tâches par catégorie
function filterByCategory(category) {
    const filteredTasks = tasks.filter(task => task.category === category);
    displayTasks(filteredTasks);
}
