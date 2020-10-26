import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'


const ControllerTitleNavigator = () => {

    const { pathname } = useLocation()

    useEffect(() => {
        switch(pathname){
            case '/listclient': document.title = 'Lista de clientes'; break;
            case '/newclient': document.title = 'Novo cliente'; break;
        }
    },[pathname])

    return null;
}
 
export default ControllerTitleNavigator;