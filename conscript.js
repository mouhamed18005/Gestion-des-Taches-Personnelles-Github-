// Sélection des éléments du formulaire
const loginForm = document.getElementById('loginForm'); // Récupération de l'élément du formulaire via son ID
const username = document.getElementById('username'); // Champ de saisie pour le nom d'utilisateur
const password = document.getElementById('password'); // Champ de saisie pour le mot de passe
const errorMessage = document.getElementById('error-message'); // Élément où afficher les messages d'erreur

// Écouter l'événement submit
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)

    // Récupérer les valeurs des champs
    const usernameValue = username.value.trim(); // Supprimer les espaces inutiles autour de la saisie
    const passwordValue = password.value.trim(); // Faire de même pour le mot de passe

    // Validation simple
    if (usernameValue === '' || passwordValue === '') {
        // Vérifier si l'un des champs est vide
        errorMessage.textContent = "Tous les champs sont obligatoires."; // Message d'erreur pour champs vides
    } else if (usernameValue !== 'admin' || passwordValue !== '1234') {
        // Vérification des valeurs entrées contre des identifiants codés en dur
        errorMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect."; // Message d'erreur pour identifiants invalides
    } else {
        // Si tout est correct, supprimer les messages d'erreur
        errorMessage.textContent = "";

        // Redirection vers la page de tableau de bord
        window.location.href = 'dashboard.html';
    }
});
