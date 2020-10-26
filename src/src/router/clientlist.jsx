import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listClients, deleteClient } from '../services/clientes'


const ClientList = () => {

    var [list, setList] = useState([]);
    const [filter, setfilter] = useState('');
    const [querExcluir, setquerExcluir] = useState(0);

    const loadClients = () => {
        const result = listClients()
        setList(result)
    }

    useEffect(() => {
        loadClients()
    },[])

    list = list.sort((a,b) =>
        a.name < b.name ? -1 : 1
    )

    const handleFilter = e => {
        setfilter(e.target.value)
    }

    const handleClear = (e) => {
        if(e.keyCode === 27)
            setfilter('')
    }

    const handleDelete = (id) => {
        setquerExcluir(id)
    }

    const handleDeleteOk = () => {
        deleteClient(querExcluir)
        setquerExcluir(0)
        loadClients()
    }

    if(filter.trim()){
        var fil = filter.trim().toLowerCase()
        list = list.filter( client => {
            return client.name.toLowerCase().indexOf(fil) >= 0
        })
    }

    if(querExcluir)
        return (
            <div style={{
                display:'flex', flexDirection:'column',
                alignItems:'center', justifyContent:'center',
                height:'100%'
            }}>
                <div style={{padding:20}}>Quer excluir o client {querExcluir}?</div>
                <div>
                    <button className='grey' onClick={e=>setquerExcluir(0)}>CANCELAR</button>
                    <button className='red' onClick={handleDeleteOk} >SIM</button>
                </div>
            </div>
        )

    return (
        <article>
            <section style={style.searchContainer}>
                <input
                    placeholder='PESQUISAR'
                    style={{flex:1}}
                    autoFocus={true}
                    onChange={handleFilter}
                    onKeyUp={handleClear}
                    value={filter}
                />
            </section>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map( client => {
                                return <tr key={client.id}>
                                    <td>{client.id}</td>
                                    <td>{client.name}</td>
                                    <td>
                                        <Link to={'/newclient/'+client.id}><button>EDITAR</button></Link>
                                        <button className='red' onClick={e=>handleDelete(client.id)}>EXCLUIR</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </section>
        </article>
    );


}
 
export default ClientList;


const style = {
    searchContainer:{
        display:'flex',
        height:40
    }
}