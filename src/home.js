import React, {Component} from 'react'
import {Table} from'./table.js'
import {Dropdown,InputGroup,DropdownButton,FormControl,Button} from 'react-bootstrap'
import './home.css'


class Home extends Component{

    
      

    render(){

        
        return(
            <div>
                <br/>
                <h2>Caloteiros</h2>
                <br/>
                <div className="form-group forf">
                 
                <InputGroup className="mb-3 col-md-6 ">
                    <DropdownButton 
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="Ano"
                    id="input-group-dropdown-1"
                    >
                    <Dropdown.Item href="#">2018</Dropdown.Item>
                    <Dropdown.Item href="#">2019</Dropdown.Item>
                    <Dropdown.Item href="#">2020</Dropdown.Item>
                   
                    </DropdownButton>
                <FormControl aria-describedby="basic-addon1"  placeholder="Selecione um Ano"/>
                &nbsp;&nbsp;&nbsp;
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="Mês"
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#/action-1">Janeiro</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Fevereiro</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Março</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Abril</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Maio</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Junho</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Julho</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Agosto</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Setembro</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Outubro</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Novembro</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Dezembro</Dropdown.Item>
                    </DropdownButton>
                    <FormControl
                    placeholder="Selecioneum Mês"
                    
                    aria-describedby="basic-addon1"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <Button>Buscar</Button>
                </InputGroup>

               

 

              
                </div>
                <Table/>
            

            </div>
        );

    }


}

            
        export {Home}