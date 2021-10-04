import React from 'react'
import frente from '../../img/inicio/frente.png'
import styled from 'styled-components';

const Tit = styled.h2`
    color:#e15205 ;
    text-align:center;
    font-weight: 300;
`;
const Fre = styled.img`
    max-width:45%;
    margin: 0 auto;
    display: block;
    border-radius:20px;
    @media (max-width: 768px) {
        max-width:60%;
    }

`;

const Inicio = () => {
    return ( 
        <>
            <Tit>Somos Fabricantes de Fundas a Medida</Tit> 
            <Fre src={frente}></Fre>
        </>
    );
}
 
export default Inicio;