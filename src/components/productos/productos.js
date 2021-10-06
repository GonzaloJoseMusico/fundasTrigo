import React, {useState} from 'react'
import styled from 'styled-components';
import { Button} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import Carrito from './carrito';
import bombo from '../../img/galeria/bombo.webp' 
import flauta from '../../img/galeria/flauta.webp'
import tumbadoras from '../../img/galeria/tumbadoras.webp'
import teclado from '../../img/galeria/teclado.webp'
import morral from '../../img/galeria/morral.webp'
import matero from '../../img/galeria/matero.webp'


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
        background:#a24104;
        right:0;
        padding: 1px 2px;
        border-radius: 20px;
        color:#fff;
        margin: 1rem auto;
        
    }
`;

const Productos = () => {

    const [productos, setProductos] = useState([
    
        {
            id:1,
            nombre: "Funda de Bombo",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            img: bombo
        },
        {
            id:2,
            nombre: "Funda para Flautas y Vientos",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            img: flauta
        },
        {
            id:3,
            nombre: "Funda para Tumbadoras",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            img: tumbadoras
        },
        {
            id:4,
            nombre: "Funda para Teclados",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            img: teclado
        },
        {
            id:5,
            nombre: "Morral",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            img: morral
        },
        {
            id:6,
            nombre: "Bolso Matero",
            descripcion: "Las fundas estan mas buenas que tu hermana, vos llevala que no te vas a clavar, aparte el loco que las hace es un capo, nada mas se tarda en mandarme la data el culiao pero bue...",
            img: morral
        }
    ]
       
)
    const [mostrarproductos, setMostrarproductos] = useState(false)

    const [carrito, setCarrito] = useState([]);
    //mostrar Producto
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id);
        setCarrito(producto);
        setMostrarproductos(true);
    }
    
    return ( 

        <>
        <Grid container>
            <Grid item xs={12} sm={4}>   
                <Ul>
                    <li><Button 
                    onClick={ () => seleccionarProducto(1) }
                    color="inherit"
                    >Bombo</Button></li>
                    <li><Button 
                    onClick={ () => seleccionarProducto( 2) }
                     color="inherit"
                    >Flautas y vientos</Button></li>
                    <li><Button 
                    onClick={ () => seleccionarProducto(3) }
                    color="inherit"
                    >Tumbadoras</Button></li>
                    <li><Button 
                    onClick={ () => seleccionarProducto(4) }
                    color="inherit"
                    >Teclados</Button></li>
                    <li><Button 
                    onClick={ () => seleccionarProducto(5) }
                     color="inherit"
                    >Morral</Button></li>
                    <li><Button 
                    onClick={ () => seleccionarProducto(6) }
                     color="inherit"
                    >Matero</Button></li>
                </Ul>
            </Grid>
            <Grid item sm={8}> 
                <ul>
                    <Carrito 
                        key={carrito.id}
                        carrito={carrito}
                    />
                </ul>
            </Grid>
        </Grid>
        </>
    );
}
 
export default Productos;