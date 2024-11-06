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

// Fonction pour envoyer une notification pour une tâche spécifique
function notifyTask(taskName) {
    if (!("Notification" in window)) {
        console.log("Les notifications ne sont pas supportées par ce navigateur.");
        return;
    }

    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log(`Notification envoyée pour la tâche : ${taskName}`);
            new Notification("Tâche en retard", {
                body:`La tâche "${taskName}" est en retard !`,
                icon: 'images/icon.png' // Remplacez par le chemin de votre icône si nécessaire
            });
        } else {
            console.log("Permission de notification non accordée.");
        }
    });
}