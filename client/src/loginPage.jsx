import React, {Component} from 'react'
import {Dropdown,InputGroup,DropdownButton,FormControl,Button} from 'react-bootstrap'

class loginPage extends Component{


    render(){
        
            return(
            
                <div>
                    <br/>
                    <h1>
                        Login
                    </h1><br/>
                    <form action="/home"> 
                    <div className="divisao_input">
                        <label>Usuário: &nbsp;</label>
                        <div className="form-group forf">
                            <InputGroup className="mb-3 col-md-3 ">
                                <FormControl aria-describedby="basic-addon1"  placeholder="Nome"/>
                            </InputGroup>
                        </div>
                    </div>
                    <div className="divisao_input">
                        <label>Senha: &nbsp;</label>
                        <div className="form-group forf">
                            <InputGroup className="mb-3 col-md-3 ">
                                <FormControl aria-describedby="basic-addon1"  placeholder="Senha"/>
                            </InputGroup>
                        </div>
                    </div>
                    <Button type="submit" className="btn">Logar</Button>
                    </form>
                    <br/><br/><br/><br/>
                    <a href="cadastro">Cadastro</a>
                </div>
                
            
            );
        


    }

}

export {loginPage}