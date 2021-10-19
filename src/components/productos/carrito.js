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
    width: 80%;
    margin: 0 auto;
    
    list-style:none;
    height:100px;
`;
const Divdescrip1 = styled.div`
    color: #915804;
    font-size: 1rem;
    width: 80%;
    margin: 0 auto;
    
    list-style:none;
    height:130px;
`;
const Divdescrip2 = styled.div`
    color: #915804;
    font-size: 1rem;
    width: 80%;
    margin: 0 auto;
    list-style:none;
    height:130px;
`;


const Carrito = ({producto}) => (
    <div>
        <Divname >{producto.nombre}</Divname>
        <Divfoto> <img src={producto.img} alt="foto"></img> </Divfoto>
        <Divdescrip> {producto.descripcion} </Divdescrip>
        <Divdescrip1>{producto.materiales.map(material=>(<li> {material}</li>))}</Divdescrip1>
        <Divdescrip2>{producto.opcionales.map(opcional=>(<li>{opcional}</li>))}</Divdescrip2>
        
  
    </div>
)


export default Carrito
