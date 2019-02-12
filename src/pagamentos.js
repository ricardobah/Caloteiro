import React,{Component} from 'react'
import {Dropdown,InputGroup,DropdownButton,FormControl,Button} from 'react-bootstrap'
import './switch.css'
import {DatePickerCompras} from './DatePicker.js'
import { ImageUpload} from './ImageUploader.js'
import App from './App';
import {Link} from 'react-router-dom'
class Pagamento extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          isLoading: false,
          transfer: false
        }
    }

    switchTransferencia(){
        
        if(this.state.transfer){
            console.log(this.state.transfer)
            this.setState({ transfer:false });
        }else{
            console.log(this.state.transfer)
            this.setState({ transfer:true });
            
        }
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
    
    // transferencia(){
    //     if(this.state.transfer){
    //         console.log(this.state.transfer)
    //         return (<div><ImageUpload/> <br/></div>)
    //     }
    // }

    render(){
        return(

            <div>
                <br/>
                    <h2>Receita Federal</h2>
                <br/>
            
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
                    {/* <InputGroup className="mb-3 col-md-4 ">
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
                    
                        
                    </InputGroup> */}
                    <DatePickerCompras/>
               </div>
            </div>
          

            <div className="divisao_input">
            <div className="form-group forf">
                <div className="form-group forf">
                <label>Transferência: &nbsp;</label>
                    <label class="switch">
                        <input onClick={()=>this.switchTransferencia()} type="checkbox"/>
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
              { this.state.transfer ? <div><ImageUpload/><br/></div> : null }
              {/* {()=>this.transferencia}  */}
            </div>
            <Link to="/home/play"> 
                <Button type="button" onClick={()=>this.play()} className="btn-success">Pagar</Button>
          
                </Link>

        </div>


        );
    }



}






export {Pagamento}