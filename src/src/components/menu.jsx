import React from 'react';
import { Link } from 'react-router-dom';
import '../css/menu.css'


const Menu = () => {
    return (
        <article className="menu">
            <Link className='button' to='/listclient'>LISTA</Link>
            <Link className='button' to='/newclient'>NOVO</Link>
        </article>
    );
}
 
export default Menu;