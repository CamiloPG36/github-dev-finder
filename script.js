const inputElement = document.getElementById('username-input');
const buttonElement = document.getElementById('search-btn');
const profileContainer = document.getElementById('profile-container');

const baseUrlAPI = 'https://api.github.com/users';

buttonElement.addEventListener('click', () => {
    const username = inputElement.value.trim();
    if (username === '') {
        console.log('Por favor, ingrese un nombre de usuario.');
        return;
    }

    // console.log(`Buscando perfil de usuario: ${username}`);
    fetchUserProfile(username);
});

async function fetchUserProfile(username) {
    try {
        const response = await fetch(`${baseUrlAPI}/${username}`);
        if (!response.ok) {
            throw new Error('Usuario no encontrado');
        }
        const data = await response.json();
        // displayUserProfile(data);
        console.log(data);
    } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
    }
}