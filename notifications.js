// Fonction pour vérifier et notifier les tâches en retard
function checkOverdueTasks() {
    const now = new Date();

    tasks.forEach(task => {
        if (task.date && !task.completed) {
            const taskDate = new Date(task.date);
            if (taskDate < now) {
                notifyTask(task.name);
            }
        }
    });
}

