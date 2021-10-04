import React from 'react'
import { IconButton} from '@material-ui/core';
import { Facebook, Instagram } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
        display: flex;
        flex-flow: row nowrap;
        color: #fff;
        align-items: center;
        
    li{
        padding: 18px 10px;
        list-style: none;
        color: #fff;
    }
    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: #a24104;
        position: fixed;
        top:0;
        right:0;
        height: 100vh;
        width:300px;
        padding-top: 3.5rem;
        transform:${({open}) => +open ? 'traslateX(0)' : 'TranslateX(100%)'};
        transition: transform 0.3s ease-in-out;
        z-index:100;
    }


`;

const MenuBurguer = ({open}) => {

    
    return (
        <Ul open={open}>
            <li><Link to="/productos" style={{
                textDecoration:"none",
                listStyle:"none",
                cursor: "pointer",
                color:"white"
            }}>Productos</Link></li>
            <li ><Link to="/nosotros" style={{
                textDecoration:"none",
                listStyle:"none",
                cursor: "pointer",
                color:"white"
            }}>Nosotros</Link></li>
            <li><Link to="/contacto" style={{
                textDecoration:"none",
                listStyle:"none",
                cursor: "pointer",
                color:"white"
            }}>Contacto</Link></li>
            <li><IconButton color="inherit" href="https://www.facebook.com/TRIGOFundas" target="_blank"><Facebook /></IconButton></li>
            <li><IconButton color="inherit" href="https://www.instagram.com/fundastrigocba/" target="_blank"><Instagram /></IconButton></li>
        </Ul>
    )
}

export default MenuBurguer
