import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { clientData, insertClient, updateClient } from '../services/clientes'


const NewClient = () => {

    const [name, setName] = useState('');

    const { id } = useParams()

    const handleSave = () => {
        if(Number(id)){
            updateClient(Number(id), {name})
            return;
        }
        insertClient({name})
    }

    useEffect(() => {
        if(Number(id)){
            const client = clientData(Number(id))
            setName(client.name)
        }
    },[id])

    return (
        <div style={{padding:20}}>
            <div>Nome</div>
            <div style={{display:'flex'}}>
                <input style={{flex:1}} autoFocus={true} value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <Link to='/listclient'><button onClick={handleSave}>SALVAR</button></Link>
                <Link to='/listclient'><button className='grey'>CANCELAR</button></Link>
            </div>
        </div>
    );
}
 
export default NewClient;