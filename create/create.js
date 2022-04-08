import { createParticipant } from '../fetch-utils.js';

const form = document.querySelector('form');


form.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(form);

//input.get value of selected workshop 
    const nameInput = data.get('participant-name');
   //on submit, grab value of workshop 
    const workshop = data.get('workshop-id');

    //call createParticipant and enter in the needed values 
    await createParticipant(nameInput, workshop);

    window.location.replace('../workshops-list');
});




// We also want a site to create the following pages
// edit a participant and which workshop they're participating in
// we want to dynamically update the workshops on dropdown