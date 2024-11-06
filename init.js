// Charger les tâches au démarrage
document.addEventListener('DOMContentLoaded', displayTasks);

// Appel de la fonction toutes les 60 secondes pour vérifier les tâches en retard
setInterval(checkOverdueTasks, 5000); // Vérifie toutes les 5 secondes