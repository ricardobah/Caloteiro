import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import { Nav, Button } from 'react-bootstrap';
import './App.css';
import {Home} from './home.js'
import {Pagamento} from './pagamentos.js'
import {Compras} from './CadastroCompras.js'
import {Caixa} from './caixa.js'
import {Solicitacoes} from './solicitacoes.js'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <MainHeader/>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/home' component={Home}/> 
            <Route exact path ='/pagamentos' component={Pagamento}/> 
            <Route exact path ='/compras' component={Compras}/> 
            <Route exact path ='/caixa' component={Caixa}/> 
            <Route exact path ='/solicitacoes' component={Solicitacoes}/> 
        </div>
      </Router>
    );
  }
}

class MainHeader extends Component{

  render(){

    return(
      
      <Nav
       activeKey="/"
       onSelect={""}
       style={ul}
      >
      <Nav.Item style={li}>
          <Nav.Link href="/home">Home</Nav.Link>     
      </Nav.Item>
      <Nav.Item style={li}>  
        <Nav.Link href="/pagamentos">Pagamentos</Nav.Link>   
      </Nav.Item>
      <Nav.Item style={li}>
        <Nav.Link href="/compras">Compras</Nav.Link>       
      </Nav.Item>
      <Nav.Item style={li}>
        <Nav.Link href="/caixa">Caixa</Nav.Link>       
      </Nav.Item>

      <Nav.Item style={li}>
        <Nav.Link href="/solicitacoes">Solicitações</Nav.Link>     
      </Nav.Item>
      <Nav.Item style={li}>
    
        <Nav.Link eventKey="disabled" disabled>
          Estoque
        </Nav.Link>
        
      </Nav.Item>
    </Nav>




    );

  }


}




const ul = {
 "list-style-type": "none",
  "margin": "0",
  "padding": "0",
  "overflow": "hidden",
  "background-color": "#333"
}

const li = {
  "float": "left",
  "display": "block",
  "color": "white",
  "text-align": "center",
  "padding": "14px 16px",
  "text-decoration": "none"
}

const a = {
  "display": "block",
  "color": "white",
  "text-align": "center",
  "padding": "14px 16px",
  "text-decoration": "none"
}




export default App;


