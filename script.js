const inputElement = document.getElementById('username-input');
const buttonElement = document.getElementById('search-btn');
const profileContainer = document.getElementById('profile-container');

buttonElement.addEventListener('click', () => {
    const username = inputElement.value.trim();
    if (username === '') {
        console.log('Por favor, ingrese un nombre de usuario.');
        return;
    }

    console.log(`Buscando perfil de usuario: ${username}`);
});
