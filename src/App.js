import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './components/inicio/inicio';
import Productos from './components/productos/productos';
import Nosotros from './components/nosotros/nosotros';
import Contacto from './components/contacto/contacto';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Whatsapp from './layouts/Whatsapp';

function App() {

  

  return (
    
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Inicio} />
        <Route exact path='/productos' component={Productos} />
        <Route exact path='/nosotros' component={Nosotros} />
        <Route exact path='/contacto' component={Contacto} />       
      </Switch>
      <Whatsapp />
      <Footer />
    </Router>
    
  );
}

export default App;
