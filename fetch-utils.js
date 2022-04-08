
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YXF1aGF3cXl0dHhkcmNiaHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTE5ODEsImV4cCI6MTk2MzEyNzk4MX0.FnfsYqPR7GPz5COh7itHiDt6as7-F__iU57NyG7IKyE';
const SUPABASE_URL = 'https://zwaquhawqyttxdrcbhxx.supabase.co';


const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// console.log(client.auth.session);


export function getUser() {
    return client.auth.session() && client.auth.session().user;
}


export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops-list');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}


export async function getWorkshops() {
    const response = await client
        .from ('workshops') //grab workshops table from sp 
        .select('*, participants (*)'); // select all columns from workshops tbl, then link together with the participants, and in participants  tbl, we want all columns
    return checkError(response);
}


export async function createParticipant(newParticipantName, workshopid) {
    const response = await client
        .from('participants')
        .insert({
            name: newParticipantName, 
            workshop_id: workshopid,
        });

    return checkError(response);
}

// export async function editParticipant(id) {
//     const response = await client
//         .from('participants')
//         .update({
//             workshop_id: 'workshop_id' })
//         .match({ id: id });

//     return checkError(response);
// }


export async function getParticipant(someId){
    const response = await client 
        .from('participants')
        .select('*')
        .match({ id: someId })
        .single();

    return checkError(response);
}


export async function editParticipant(someId, name, workshopId) {
    const response = await client
        .from('participants')
        .update({ 
            name: name,
            workshop_id: workshopId
        })
        .match({ id: someId });

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
