import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';


// const workshops = document.querySelector('.workshops');

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});



window.addEventListener('load', async () => {

    const workshops = await getWorkshops();
    console.log('workshops', workshops);

});