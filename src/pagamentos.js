import React,{Component} from 'react'
import {Dropdown,InputGroup,DropdownButton,FormControl,Button} from 'react-bootstrap'
import './switch.css'
class Pagamento extends Component{
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
                    <h2>Receita Federal</h2>
                <br/>
            <form action="/home"> 
            {/* lembrar do post e name dos inputs */}
            <div className="divisao_input">
                <label>Nome: &nbsp;</label>
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
                    <InputGroup className="mb-3 col-md-4 ">
                        <DropdownButton as={InputGroup.Prepend} variant="outline-secondary"  title="Ano" id="input-group-dropdown-1" >
                            <Dropdown.Item  >2018</Dropdown.Item>
                            <Dropdown.Item  >2019</Dropdown.Item>
                        </DropdownButton>
                        < FormControl aria-describedby="basic-addon1"  placeholder="{this.state.year}"/>
                        &nbsp;&nbsp;&nbsp;
                        <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="Mês" id="input-group-dropdown-1">
                            <Dropdown.Item  >Outubro</Dropdown.Item>
                            <Dropdown.Item  >Novembro</Dropdown.Item>
                            <Dropdown.Item  >Dezembro</Dropdown.Item>
                        </DropdownButton>
                        <FormControl placeholder="{this.state.month}" aria-describedby="basic-addon1" />
                    
                        
                    </InputGroup>
               </div>
            </div>
          

            <div className="divisao_input">
            <div className="form-group forf">
                <div className="form-group forf">
                <label>Transferência: &nbsp;</label>
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                    </label>
                </div>
                &nbsp; &nbsp; &nbsp;
                <div className="form-group forf">
                {/* TRAVAR TUDO QUANDO BOTAR ISENTO */}
                <label>Isento: &nbsp;</label> 
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                    </label>
                </div>
              </div>  
            </div>

                <Button type="submit" className="btn-success">Pagar</Button>
          
                </form>

        </div>


        );
    }



}






export {Pagamento}