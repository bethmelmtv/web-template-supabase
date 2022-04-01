import { checkAuth, getWorkshops, logout, getParticipants } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});



window.addEventListener('load', async () => {

    const participants = await getParticipants();
    const workshops = await getWorkshops();

    console.log('participants', participants);
    console.log('workshops', workshops);

});