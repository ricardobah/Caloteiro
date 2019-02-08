import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import { Nav, Button } from 'react-bootstrap';
import './App.css';
import {Home} from './home.js'

class App extends Component {
  render() {
    return (
      <Router>
       
          
           
        <div className="App">
            <MainHeader/>
            
            <Route exact path ='/home' component={Home}/> 
            <Route exact path ='/' component={Home}/>
        
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
    
        <Nav.Link href="/solicitacos">Solicitações</Nav.Link>
        
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


