import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';

import { renderWorkshop } from '../render-utils.js';

const workshopsDiv = document.querySelector('.workshops-div');

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});




window.addEventListener('load', async () => {
    //calls getworkshops function 
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        console.log(workshop);
        const workshopElement = renderWorkshop(workshop);
        const participantEl = workshop.participant;
        workshopsDiv.append(workshopElement, participantEl);
    }
    return workshopsDiv;
});