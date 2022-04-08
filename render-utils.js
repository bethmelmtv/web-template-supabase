export function renderWorkshop(workshop) {

    const workshopEl = document.createElement('div');
    const workshopName = document.createElement('p');

    workshopEl.classList.add('workshopDiv');

    workshopName.textContent = workshop.topic;

    workshopEl.append(workshopName);

    for (let participant of workshop.participants) { //we use particpants cause that's the name of the table connected to workshop
        const participantName = document.createElement('a');
        participantName.classList.add('eachparticipant');
        participantName.textContent = participant.name; //grabbing particpant.name from participant table 
        participantName.href = `../edit-participant/?id=${participant.id}`; //redirecitng them to a new page with their respective id 
        workshopEl.append(participantName);
    }
    return workshopEl;
}
