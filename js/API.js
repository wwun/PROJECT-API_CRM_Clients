const url = "http://localhost:4000/clients";

export const createClient = async client => {
    try{
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        window.location.href = 'index.html';
    }catch(error){
        console.log(error);
    }
};

export const getClients = async () => {
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error);
    }
}

export const getClientById = async (id) => {
    try{
        const response = await fetch(`${url}/${id}`);
        return await response.json();
    }catch(error){
        console.log(error);
    }
}

export const updateClient = async (client) => {
    try{
        await fetch(`${url}/${client.id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    }catch(error){
        console.log(error);
    }
}

export const deleteClient = async (id) => {
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE'            
        })
    }catch(error){
        console.log(error);
    }
}