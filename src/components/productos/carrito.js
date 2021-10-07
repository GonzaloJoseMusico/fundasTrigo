import React from 'react'
import styled from 'styled-components';


const Divname = styled.div`
    color: #915804;
    font-size: 2rem;
    text-align: center;
    margin: 2rem;
    
`;

const Divfoto = styled.div`
    max-width: 300px;
    height:auto;
    margin: 1rem auto;
    
    img{
        max-width: 300px;
        height:auto;
        border-radius: 20px;
        border: 2px solid #915804;
    }
`;
const Divdescrip = styled.div`
    color: #915804;
    font-size: 1rem;
    width: auto;
    height:150px;
    margin: 0 auto;
`;



const Carrito = ({carrito}) => (
    <div>
        {carrito.map(carrito => (
            
            <div key={carrito.id}>
            
            <Divname >{carrito.nombre}</Divname>
            <Divfoto> <img src={carrito.img}></img> </Divfoto>
            <Divdescrip> {carrito.descripcion} </Divdescrip>
            </div>
       ))}  
       </div>
)


export default Carrito
