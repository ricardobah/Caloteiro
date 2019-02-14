import React,{Component} from 'react'
import {Dropdown,InputGroup,DropdownButton,FormControl,Button} from 'react-bootstrap'
import './switch.css'
import {DatePickerCompras} from './DatePicker.js'
import {ImageUpload} from './ImageUploader.js'
class Compras extends Component{
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
                    <h2>Compras</h2>
                <br/>
            <form action="/home"> 
            {/* lembrar do post e name dos inputs */}
            <div className="divisao_input">
                <label>Responsável: &nbsp;</label>
                <div className="form-group forf">
                    <InputGroup className="mb-3 col-md-3 ">
                        <FormControl aria-describedby="basic-addon1"  placeholder="Nome"/>
                    </InputGroup>
                </div>
            </div>
            <div className="divisao_input">
            <label>Valor: &nbsp;</label>
                <div className="form-group forf">
                    <InputGroup className="mb-3 col-md-3 ">
                        <FormControl aria-describedby="basic-addon1"  placeholder="Valor"/>
                    </InputGroup>
                </div>
            </div>
            <div className="divisao_input">
                <label>Data: &nbsp;</label>
                <div className="form-group forf">
                   
                    <DatePickerCompras/>
               </div>
            </div>
          

            <div className="divisao_input">
                  <label>Foto:</label>
            <div className="form-group forf">
                  <InputGroup className="mb-3 col-md-3 ">
                     <ImageUpload/>
                  </InputGroup>
                
              </div>  
            </div>

                <Button type="submit" className="btn-success">Pagar</Button>
          
                </form>

        </div>


        );
    }



}






export {Compras}