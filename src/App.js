import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import { Nav, Button } from 'react-bootstrap';
import './App.css';
import {Table} from './table.js'
class App extends Component {
  render() {
    return (
      <Router>
       
          
           
        <div className="App">
            <MainHeader/>
            <Route exact path ='/' component={"MainHeader"}/> 
            <Table></Table>
        
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
      >
      <Nav.Item>
        <button >
          
          <Nav.Link href="/">Home</Nav.Link>
        </button>
      </Nav.Item>
      <Nav.Item>
      <button >
        <Nav.Link href="/pagamentos">Pagamentos</Nav.Link>   </button >
      </Nav.Item>
      <Nav.Item>
      <button >
        <Nav.Link href="/compras">Compras</Nav.Link>
        </button >
      </Nav.Item>
      <Nav.Item>
      <button >
        <Nav.Link href="/solicitacos">Solicitações</Nav.Link>
        </button >
      </Nav.Item>
      <Nav.Item>
      <button >
        <Nav.Link eventKey="disabled" disabled>
          Estoque
        </Nav.Link>
        </button >
      </Nav.Item>
    </Nav>




    );

  }


}


export default App;


