import React from 'react'
import { IconButton} from '@material-ui/core';
import { Facebook, Instagram } from '@material-ui/icons';
import styled from 'styled-components';

const Foot = styled.footer`
    width:100%;
    height:35px;
    font-size: 0.8rem;
    font-weight: 200;
    display: flex;
    background-color:#a24104 ;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    color: white;
    position: relative;
    bottom:0;
   
    
`;

const Footer = () => {
    return (
        <Foot>
            <p>Todos los derechos reservados - Fundas Trigo
            <IconButton color="inherit" href="https://www.facebook.com/TRIGOFundas" target="_blank"><Facebook /></IconButton>
            <IconButton color="inherit" href="https://www.instagram.com/fundastrigocba/" target="_blank"><Instagram /></IconButton></p>
        </Foot>
    )
}

export default Footer
