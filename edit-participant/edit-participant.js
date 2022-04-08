import { getWorkshops, getParticipant, editParticipant } from '../fetch-utils.js';

const form = document.querySelector('form');
const nameEl = document.querySelector('input');
const selectEl = document.querySelector('select');


const params = new URLSearchParams(window.location.search);
// console.log(params);





window.addEventListener('load', async () => {
//when trying to pull info from supabase, equal some variables to the fetch function!  

    const workshops = await getWorkshops(); 
    const participant = await getParticipant(params.get('id')); // cant get input name from input field in html 

    //input for needs to be prefilled with person's name 
    nameEl.value = participant.name;

    for (let workshop of workshops) {

        const optionEl = document.createElement('option');

        optionEl.textContent = workshop.topic;
        optionEl.value = workshop.id;

        if (workshop.id === participant.workshop_id) {
            optionEl.selected = true;
        }
        selectEl.append(optionEl);
    }
});




form.addEventListener('submit', async (event) => {
     //prevents weird stuff from happening 
    event.preventDefault();
   
    //gets id from the url and finds the correct participant 
    const participant = await getParticipant(params.get('id'));
    //calls data from form
    const data = new FormData(form);

    
    await editParticipant(participant.id, data.get('participant-name'), data.get('workshop-id'));

    console.log(nameEl.value);

    window.location.href = '../workshops-list';

});


  