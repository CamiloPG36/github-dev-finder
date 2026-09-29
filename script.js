// Selecting elements from the DOM
const inputElement = document.getElementById('username-input');
const buttonElement = document.getElementById('search-btn');
const profileContainer = document.getElementById('profile-container');

// Defining the base URL for the GitHub API
const baseUrlAPI = 'https://api.github.com/users';


// Function to handle the search logic
function handleSearch() {
    const username = inputElement.value.trim();
    if (username === '') {
        profileContainer.innerHTML = `<p class="error-consult">No hay ingresado ningún usuario para consultar.</p>`;
        return;
    }
    fetchUserProfile(username);
}

// Add event listener for the search button click
buttonElement.addEventListener('click', handleSearch);

// Add event listener for pressing the 'Enter' key in the input
inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Add a function to Fetch user profile data from the GitHub API
async function fetchUserProfile(username) {
    try {
        const response = await fetch(`${baseUrlAPI}/${username}`);
        if (!response.ok) {
            throw new Error('Usuario no encontrado');
        }
        const data = await response.json();
        displayUserProfile(data);

    } catch (error) {
    profileContainer.innerHTML = `<p class="error-message">⚠️ ${error.message}⚠️</p>`;
    }
}

// Add a function to display the user profile data in the DOM
function displayUserProfile(data) {
    profileContainer.innerHTML = `
        <article class="profile-card">
            <img src="${data.avatar_url}" alt="${data.login}'s profile avatar" width="150" height="150">
            <h2>${data.name || data.login}</h2>
            <p class="bio">Bio: ${data.bio || 'No available'}</p>
            <div class="stats">
                <p>Public Repos: ${data.public_repos}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
            </div>
            <a href="${data.html_url}" target="_blank" rel="noopener noreferrer">View Profile on GitHub</a>
        </article>
    `;
}