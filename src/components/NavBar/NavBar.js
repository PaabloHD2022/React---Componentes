import React from 'react'
import LogoPrintcenter from '../logoPrintcenter/LogoPrintcenter'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='menu-navbar-container'>
        <LogoPrintcenter/>
            <ul className='menu-items'> 
                <li>
                    <a href='#' className='menu-list'>Home</a>
                </li>
                <li> 
                    <a href='#' className='menu-list'>Nosotros</a>
                </li>
                <li>
                    <a href='#' className='menu-list'>Servicios</a>
                </li>
                <li>
                    <a href='#' className='menu-list'>Tienda</a>
                </li>
                <li>
                    <a href='#' className='menu-list'>Contacto</a>
                </li>    
            </ul>
        <CartWidget/>        
        </div>  
        )
}

export default NavBar