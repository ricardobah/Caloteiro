import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MainHeader/>
          <Route exact path ='/' component={MainHeader}/>
          <h1>Caloteiro</h1>
       
      </div>
    );
  }
}


class MainHeader extends Component{
  render(){

    return(
      
      <Nav
       activeKey="/home"
       onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>




    );

  }


}


export default App;


