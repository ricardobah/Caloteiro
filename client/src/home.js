import React, {Component} from 'react'
import {Table} from'./table.js'
import {Dropdown,InputGroup,DropdownButton,FormControl,Button} from 'react-bootstrap'
import './home.css'
import {Animation} from './Animation.js'
import anime from 'animejs';
anime({
  // targets: 'div',
  // rotate: '1turn',
  // duration: 3800
  targets: '.css-selector-demo .el',
  translateX: 250

});

class Home extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          isLoading: false,  
          month : "Selecione um Mês",
          year : "Selecione um Ano"
        
        }
    }
       setStateMonth(Month){
    //    console.log(asd);
        this.setState({
            month:Month
        });
    }

    fillTable(month,year){
        console.log(month+year) //TODO pegar dados do banco para jogar na tabela
    }

    setStateYear(Year){
        // console.log(asd);
         this.setState({
             year:Year
         });
     }

    render(){
       
        anime({
            targets: 'div',
            rotate: '1turn',
            duration: 3800
          
          
          });
        return(
            <div className="anima">
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
                    <Dropdown.Item onClick={()=>this.setStateYear("2018")} >2018</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.setStateYear("2019")} >2019</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.setStateYear("2020")} >2020</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.setStateYear("2021")} >2021</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.setStateYear("2022")} >2022</Dropdown.Item>
                    <Dropdown.Item onClick={()=>this.setStateYear("2023")} >2023</Dropdown.Item>
                   
                    </DropdownButton>
                <FormControl aria-describedby="basic-addon1"  placeholder={this.state.year}/>
                &nbsp;&nbsp;&nbsp;
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="Mês"
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item onClick={()=>this.setStateMonth("Janeiro")}  >Janeiro</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Fevereiro")}>Fevereiro</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Março")} >Março</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Abril")} >Abril</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Maio")} >Maio</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Junho")} >Junho</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Julho")} >Julho</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Agosto")} >Agosto</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Setembro")} >Setembro</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Outubro")} >Outubro</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Novembro")} >Novembro</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setStateMonth("Dezembro")} >Dezembro</Dropdown.Item>
                    </DropdownButton>
                    <FormControl
                    placeholder={this.state.month}
                    
                    aria-describedby="basic-addon1"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <Button onClick={()=>this.fillTable(this.state.month, this.state.year)}>Buscar</Button>
                </InputGroup>

               

 

              
                </div>
                <Table/>
            </div>
        );

    }


}

            
        export {Home}