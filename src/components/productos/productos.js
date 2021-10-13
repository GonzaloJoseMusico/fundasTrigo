import React, {useState} from 'react'
import styled from 'styled-components';
import { Button, useMediaQuery } from '@material-ui/core';
import {Grid} from '@material-ui/core';
import Carrito from './carrito';
import bombo from '../../img/galeria/bombo.jpg' 
import flauta from '../../img/galeria/flauta.webp'
import tumbadoras from '../../img/galeria/tumbadoras.jpg'
import teclado from '../../img/galeria/teclado.jpg'
import morral from '../../img/galeria/morral.webp'
import matero from '../../img/galeria/matero.jpg'
import caja from '../../img/galeria/caja.jpg' 
const ProductButton = styled(Button)`
&& {
  background-color: ${props=> props.active ? "#e15205 " : "#a24104"};
  color: ${props=> props.active ? "black" : "white"};
}
`

const Ul = styled.ul`
    list-style:none;
    width: 300px;
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-around;
    text-align:center;
    
    @media (max-width:768px){
        width:100%;
        padding: 0;
       
    }
    li{
        padding: 1px 2px;
        border-radius: 20px;
        margin: 1rem auto;
        
    }
`;

const Productos = () => {

    const [productos, setProductos] = useState([
    
        {
            id:1,
            nombre: "Funda de Bombo",
            descripcion: "Está construida con material importado de buena calidad. Con tiras de mochila muy cómodas para viajar y tener nuestro instrumento protegido de golpes e impermeable.",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: bombo
        },
        {
            id:2,
            nombre: "Funda de Caja",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: caja
        },
        {
            id:3,
            nombre: "Funda para Flautas y Vientos",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: flauta
        },
        {
            id:4,
            nombre: "Funda para Tumbadoras",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: tumbadoras
        },
        {
            id:5,
            nombre: "Funda para Teclados",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: teclado
        },
        {
            id:6,
            nombre: "Morral",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: morral
        },
        {
            id:7,
            nombre: "Bolso Matero",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: matero
        }
    ]
       
)
    
    const [carrito, setCarrito] = useState(1);
    //mostrar Producto
    const seleccionarProducto = id => {
        setCarrito(id);
    }

    
    
    return ( 

        <>
        
        <Grid container>
            <Grid item xs={12} sm={4}>   
                <Ul>
                    {
                        productos.map(producto => {
                            return (
                                <li key={producto.id}>
                                    <ProductButton 
                                        active={producto.id === carrito}
                                        onClick={ () => seleccionarProducto(producto.id) }
                                        color="inherit"
                                    >{producto.nombre}</ProductButton>            
                                </li>
                            )
                        })
                    }
                </Ul>
            </Grid>
            <Grid item sm={8}> 
                <ul>
                    <Carrito 
                        
                        producto={productos.find(prod => prod.id === carrito )}
                    />
                </ul>
            </Grid>
        </Grid>
        
        </>
    );
}
 
export default Productos;