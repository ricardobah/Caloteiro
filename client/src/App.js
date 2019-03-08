import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import { Nav, Button } from 'react-bootstrap';
import './App.css';
import {Home} from './home.jsx'
import {Pagamento} from './pagamentos.jsx'
import {Compras} from './CadastroCompras.jsx'
import {Caixa} from './caixa.jsx'
import {Solicitacoes} from './solicitacoes.jsx'
import {loginPage} from './loginPage.jsx'
import {Cadastro} from './cadastro.jsx'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginSucess } from './actions';




class App extends Component {

  

  constructor(props){
    super(props)

    this.state = {
      Play:false,
      logado:null
    
    }
}

loginEvent = event => {
  this.setState({
    logado: event.target.value
  })
}



  play(){
    
    var audio = document.getElementById("audio");
    if(audio!=null){
      console.log("aaaaaaa")
    if(!this.state.Play ){
      audio.play();
      this.setState({Play:true})
    }else{

        audio.pause();
        this.setState({Play:false})
      }
    }
  }
 
/*
usuario
senha
mes de cadastro
nome
saldo
ativo
*/

  componentManager(name){
    if(this.state.logado!=null){

      switch(name){
        case "home":
        return Home
        case "loginPage":
        return loginPage
        case "pagou":
        return pagou
        case "Pagamento":
        return Pagamento
        case "Compras":
        return Compras
        case "Caixa":
        return Caixa
        case "Solicitacoes":
        return Solicitacoes
        case "Cadastro":
        return Cadastro
        
      }
    }else{
      return loginPage
    }
  }
    
  
  render() {
    const { loginSucess, logado}= this.props;
    const {logado} = this.state;
      return (
        <Router>
        <div className="App">
          <audio id="audio" src="/TiroPart.mp3" ></audio>
          <MainHeader/>
        
          <Route exact path ='/' component={this.componentManager("loginPage")}/>
          
          <Route path ='/home/' component={this.componentManager("home")}/> 
          {/* <Route exact path ='/home/play' component={this.componentManager("pagou")}  render={ this.play()}/> */}
          <Route exact path ='/pagamentos' component={this.componentManager("Pagamento")}/> 
          <Route exact path ='/compras' component={this.componentManager("Compras")}/> 
          <Route exact path ='/caixa' component={this.componentManager("Caixa")}/> 
          <Route exact path ='/solicitacoes' component={this.componentManager("Solicitacoes")}/> 
          <Route exact path ='/cadastro' component={this.componentManager("Cadastro")}/> 
          <button onClick={() => loginSucess(logado)}> 
          {/* loginButton("inputValue") */}
          Click me!
        </button>
        </div>
      </Router>
    );

  }
  teste(){
console.log(this.props)


console.log(loginSucess)
  }

}

class pagou extends Component{

  render(){
  return(  <audio id="audio" src="/TiroPart.mp3" ></audio>);

  }

}



class MainHeader extends Component{
  constructor(props){
    super(props)

    this.state = {
      Play:false
    
    }
}
   play(){
    var audio = document.getElementById("audio");
    if(!this.state.Play){
      audio.play();
      this.setState({Play:true})
    }else{
      audio.pause();
      this.setState({Play:false})
    }
  }
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
        <Nav.Link href="/pagamentos">Pagamento</Nav.Link>   
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
     

      <Nav.Item style={li}>
        <Nav.Link onClick={() => this.play()} className="text-success" >
        ♫ Play 
        </Nav.Link>
      
    
      </Nav.Item>
      <Nav.Item style={li}>
        <Nav.Link onClick={() => this.play()} className="text-danger" >
          Sair
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


const mapStateToProps = store => ({
  newValue: store.loginState.newValue
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginSucess }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);


