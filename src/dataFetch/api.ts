export const getAllprods = async() =>{
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog', {cache:"no-store"});
    return res.json();

};