import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';

import { renderWorkshop } from '../render-utils.js';

const workshopsDiv = document.querySelector('.workshops-div');

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});




window.addEventListener('load', async () => {
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const workshopElement = renderWorkshop(workshop);
        workshopsDiv.append(workshopElement);
        const participantEl = workshop.participant;
        console.log(participantEl);
    }
});