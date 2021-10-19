import React, {useState} from 'react'
import styled from 'styled-components';
import { Button, Modal } from '@material-ui/core';
import Carrito from './carrito';
import bombo from '../../img/galeria/bombo.jpg' 
import flauta from '../../img/galeria/flauta.webp'
import tumbadoras from '../../img/galeria/tumbadoras.jpg'
import teclado from '../../img/galeria/teclado.jpg'
import morral from '../../img/galeria/morral.webp'
import matero from '../../img/galeria/matero.jpg'
import caja from '../../img/galeria/caja.jpg' 


const Button1 = styled(Button)`
    background-color:#915804 !important;
    color: white !important;
`;


const Popup = styled.div`
    position: relative;
    max-width:500px;
    background-color: rgb(216, 216, 216);
    border: 2px solid #a24104;
    border-radius: 20px;
    box-shadow: 10px 5px 5px black;
    padding: 16px 32px 24px;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    max-height:85%;
    overflow:auto;
    ::-webkit-scrollbar {display: none;}
`;

const Ul = styled.ul`
    list-style:none;
    width: 100%;
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
            nombre: "Bombo",
            descripcion: "Está construida con material importado de buena calidad. Con tiras de mochila muy cómodas para viajar y tener nuestro instrumento protegido de golpes e impermeable.",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: bombo
        },
        {
            id:2,
            nombre: "Caja",
            descripcion: "Está construida con material importado de buena calidad. Con tiras de mochila muy cómodas para viajar y tener nuestro instrumento protegido de golpes e impermeable.",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: caja
        },
        {
            id:3,
            nombre: "Flautas y Vientos",
            descripcion: "Está construida con material importado de buena calidad. Con tiras de mochila muy cómodas para viajar y tener nuestro instrumento protegido de golpes e impermeable.",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: flauta
        },
        {
            id:4,
            nombre: "Tumbadoras",
            descripcion: "Está construida con material importado de buena calidad. Con tiras de mochila muy cómodas para viajar y tener nuestro instrumento protegido de golpes e impermeable.",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: tumbadoras
        },
        {
            id:5,
            nombre: "Teclados",
            descripcion:"Está construida con material importado de buena calidad. Con tiras de mochila muy cómodas para viajar y tener nuestro instrumento protegido de golpes e impermeable.",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: teclado
        },
        {
            id:6,
            nombre: "Morral",
            descripcion: "Está construida con material importado de buena calidad. Con tiras de mochila muy cómodas para viajar y tener nuestro instrumento protegido de golpes e impermeable.",
            materiales: ["Materiales:","Cordura importada", "Polietileno 10mm", "Friselina 120grs", "Cinta de mochila de 3", "Cierre y deslizador super grande"],
            opcionales: ["Opcionales:", "Con tiras de mochila", "Con bolsillo", "Doble polietileno"],
            img: morral
        },
        {
            id:7,
            nombre: "Bolso Matero",
            descripcion: "Está construida con material importado de buena calidad. Con tiras de mochila muy cómodas para viajar y tener nuestro instrumento protegido de golpes e impermeable.",
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
    const [modal, setModal] = useState(false);

    const abrirCerrarModal = () =>{
        setModal(!modal);
    }
    return ( 

        <>
        
            <Ul>
                {
                    productos.map(producto => {
                        return (
                            <li key={producto.id}>
                                <Button1 
                                    onClick={ () => {
                                        abrirCerrarModal()
                                        seleccionarProducto(producto.id)
                                        } }
                                    color="inherit"
                                    
                                >{producto.nombre}</Button1>            
                            </li>
                        )
                    })
                }
            </Ul>
        
            <Modal
            open={modal}
            onClose={abrirCerrarModal}> 
                <Popup
                onClick={()=>abrirCerrarModal()}
                >
                    <Carrito 
                        producto={productos.find(prod => prod.id === carrito )}
                    />
                </Popup>
            </Modal>      
        </>
        
    );
}
 
export default Productos;