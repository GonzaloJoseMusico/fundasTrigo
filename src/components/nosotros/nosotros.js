import React from 'react'
import styled from 'styled-components';
import nosotros from '../../img/nosotros/nosotros.jpeg'

const H2 = styled.h2`
    margin-left: 4rem;
    color: #915804;
    padding:2rem;
    font-size:2rem;
    @media (max-width:768px){
        margin: 0 auto;
        font-size: 1rem;
    }
`;

const Text = styled.p`
    position: relative;
    margin: 0 auto;
    font-size: 1.5rem;
    justify-content: center;
    color: #915804;
    max-width:700px;
    padding:1rem;
    height:12rem;

    @media (max-width:768px){
        font-size:1rem;
    }
`;
const Img = styled.img`
    max-width:500px;
    margin: 0 auto;
    display: block;
    align-items: center;
    border-radius: 20px;
`;
const Div = styled.div`
    margin: 1rem auto;
    border-radius: 20px;
    max-width: 900px;
    max-height:700px;
    border: 0.5px solid #915804;
`;

const Nosotros = () => {
    return (<Div>
     <H2>¿Quiénes somos?</H2> 
     <Img src={nosotros}></Img>
     <Text>Fabricamos fundas simples y reforzadas para instrumentos de todo tipo. Las realizamos a pedido del cliente y con el cliente la diseñamos. Ofrecemos un buen precio y calidad en nuestros productos artesanales hechos a medida. Habitamos en Córdoba capital pero enviamos nuestros productos a todo el país. </Text>
     </Div>);
}
 
export default Nosotros;