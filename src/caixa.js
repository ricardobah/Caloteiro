import React,{Component} from 'react'
import {Dropdown,InputGroup,DropdownButton,FormControl,Button} from 'react-bootstrap'
import './switch.css'
class Caixa extends Component{
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
                    <h2>Caixa</h2>
                <br/>
           
                <div className="Content  forf col-12">
                    <div className="col-6">
                        <h4>Relatório</h4>
                    </div>
                    <div className="col-6">
                        <h4>Gráfico</h4>
                    </div>
                </div>


            </div>


        );
    }



}






export {Caixa}