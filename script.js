// Selecting elements from the DOM
const inputElement = document.getElementById('username-input');
const buttonElement = document.getElementById('search-btn');
const profileContainer = document.getElementById('profile-container');

// Defining the base URL for the GitHub API
const baseUrlAPI = 'https://api.github.com/users';

// Add event listener for the search button click
buttonElement.addEventListener('click', () => {
    const username = inputElement.value.trim();
    if (username === '') {
        console.log('Por favor, ingrese un nombre de usuario.');
        return;
    }
    fetchUserProfile(username);
});

// Create a function to Fetch user profile data from the GitHub API
async function fetchUserProfile(username) {
    try {
        const response = await fetch(`${baseUrlAPI}/${username}`);
        if (!response.ok) {
            throw new Error('Usuario no encontrado');
        }
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
    }
}
