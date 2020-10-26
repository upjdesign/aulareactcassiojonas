import React from 'react';
import { Route } from 'react-router-dom';
import '../css/pages.css'
import ClientList from '../router/clientlist';
import NewClient from '../router/newclient';


const Pages = () => {
    return (
        <article className='areaNavigation'>
            <Route path='/listclient' exact>
                <ClientList />
            </Route>
            <Route path='/newclient/:id?' exact>
                <NewClient />
            </Route>
        </article>
    );
}
 
export default Pages;