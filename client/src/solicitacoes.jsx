import React,{Component} from 'react'
import {Dropdown,InputGroup,DropdownButton,FormControl,Button} from 'react-bootstrap'
import './switch.css'
class Solicitacoes extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          isLoading: false
        }
    }
    

    render(){
        return(
            <div>     
                <br/>   
                  <h1>Solicitações</h1>
                <br/>
                <form action="/home"> 
                    <label>Solicitante:</label><br/>
                    <input type="text"/><br/>
                    <br/>
                    <label>Solicitação:</label><br/>
                    <textarea rows="4" cols="50">
                        Quero tortinha de morango
                    </textarea><br/>
                    <br/>
                    <Button  type="submit"  className="btn-success">Send</Button>
                    </form>
            </div>


        );
    }



}






export {Solicitacoes}