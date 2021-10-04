import { Fragment} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Burguer from './Burguer';
import logoTrigo from '../img/logo/logoTrigo.jpg'


const Nav = styled.nav`
    width:100%;
    height:75px;
    display: flex;
    background-color:  #a24104 ;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    list-style: none;
    
`;
const Img = styled.img`
    width: 17%;
    margin-left:3rem;
`;

const Header = () => {
    
    return ( 
        <Fragment>
            
            <>
                <Nav>
                <Link to="/"><Img src={logoTrigo}></Img></Link>
                <Burguer />
                </Nav>  
            </>
        </Fragment>
     );
}
 
export default Header;