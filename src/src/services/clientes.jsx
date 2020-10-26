var clients = [
    { id:1, name:'Jonas Gomes' },
    { id:2, name:'Cássio Silva' },
    { id:3, name:'Teteia' },
]


function sort(){
    return Math.round( Math.random() * 100000000 ).toString()
}



function listClients(){
    return clients;
}

function clientData(id){
    return clients.find( client => {
        return client.id === id
    } )
}

function deleteClient(id){
    clients =  clients.filter( client => {
        return client.id !== id
    } )
    return true;
}

function insertClient(data){
    data.id = sort();
    clients.push( data )
    return data.id;
}

function updateClient(id, data){
    delete data.id
    clients = clients.map( client => {
        if(client.id === id){
            client = { ...client, ...data }
        }
        return client
    } )
    return id
}


export {
    listClients, clientData, deleteClient, insertClient, updateClient
}