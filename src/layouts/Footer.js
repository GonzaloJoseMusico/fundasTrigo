import React from 'react'
import { IconButton} from '@material-ui/core';
import { Facebook, Instagram } from '@material-ui/icons';
import styled from 'styled-components';

const P = styled.p`
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
    position: inherit;

    @media (max-width:768px){
        position: relative;
        bottom:0;
    }
    
`;

const Footer = () => {
    return (
        <footer>
            <P>Todos los derechos reservados - Fundas Trigo
            <IconButton color="inherit" href="https://www.facebook.com/TRIGOFundas" target="_blank"><Facebook /></IconButton>
            <IconButton color="inherit" href="https://www.instagram.com/fundastrigocba/" target="_blank"><Instagram /></IconButton></P>
        </footer>
    )
}

export default Footer
