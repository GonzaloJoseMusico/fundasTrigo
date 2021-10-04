import React, {useState} from 'react'
import styled from 'styled-components'
import MenuBurguer from './MenuBurguer';

const StyledBurguer = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index:110;
    display:none;

    @media (max-width: 768px){
        display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    }

    div{
        width:2rem;
        height: .25rem;
        background-color: ${({open}) => open ? '#fff' : '#fff'} ;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0deg)'}
        }
        &:nth-child(2) {
            
            opacity: ${({open}) => open ? '0' : '1'};
        }
        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
        }
    }
`;


const Burguer = () => {

    const [open, setOpen] = useState(false)

    return (
        <main open={open} onClick={()=> setOpen(!open)}>
        <StyledBurguer open={open}>
            <div  />      
            <div />      
            <div />      
        </StyledBurguer>
        <MenuBurguer open={open} />
        </main>
    )
}

export default Burguer
