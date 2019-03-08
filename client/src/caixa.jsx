import React,{Component} from 'react'
import {Dropdown,InputGroup,DropdownButton,FormControl,Button} from 'react-bootstrap'
import './switch.css'
import {getOption} from './chart.jsx'
import './caixa.css'
import ReactEcharts from 'echarts-for-react';
 
// render echarts option.




class Caixa extends Component{
    
    constructor(props){
        super(props)
    
        this.state = {
          isLoading: false
        }
    }
    
   listaPagamentos =[
        {date:'Dez/18',value:5,average:7},
        {date:'Jan/19',value:4,average:7},
        {date:'Fev/19',value:3,average:7},
        {date:'Mar/19',value:2,average:7},
        {date:'Abr/19',value:1,average:7},
        {date:'Mai/19',value:3,average:7},
        {date:'Jun/19',value:9,average:7},
        {date:'Jul/19',value:8,average:7},

   ];


    render(){
        return(

            <div>
                <br/>
                    <h2>Caixa</h2>
                <br/>
           
                <div className="Content  forf col-12">
                    <div className="col-6">
                        <h3>Relatório</h3>
                        <br/><br/><br/> 
                        <h3><font color="green">Entradas: 100</font></h3>
                        <h3><font color="red">Saidas: 85</font></h3>
                        <br/>
                        <h3><font color="green">Total: 15</font></h3>
                        <div className="slidecontainer">
                          <input type="range" min="1" max="12"  className="slider" onClick={()=> this.slider()} id="myRange"/>
                        <div id="demo"></div>
                        </div>
                        <br/><br/><br/> <br/><br/><br/> <br/>
                    </div>
                    <div className="col-6">
                        <h3>Gráfico</h3>
                        <div className="container col-lg12 col-md-12 col-sm-12">
                        {/* style=" width:550px; height:50px; float:left; padding-bottom:100px; " */}
                            <h3 id="noData3"></h3>
                            {/* style="width: 1100px; height: 500px; float: left;" */}
                            <div id="mainSensorData" ></div>
                            <ReactEcharts 
                                option={getOption(this.listaPagamentos)} 
                                style={{height: '400px', width: '100%'}}  
                                opts={{renderer: 'svg'}}  
                                className='react_for_echarts' />
                        </div>
                    </div>
                </div>

                
            </div>


        );
    }


    slider(){
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        ///
        
        // switch(this.value){
        //     case "1":
        //     console.log("asd")
        //     slider.setAttribute("value","Janeiro") 
        //     break;
        //     case 2:
        //     console.log("asd1")
        //     slider.value = "Fevereiro"; 
        //     break;
        //     case 3:
        //     console.log("asd2")
        //     slider.value = "Março"; 
        //     break;
        //     case 4:
        //     console.log("asd3")
        //     output.innerHTML = this.value; 
        //     break;
        //     case 5:
        //     console.log("asd4")
        //     output.innerHTML = this.value; 
        //     break;
        //     case 6:
        //     console.log("asd5")
        //     output.innerHTML = this.value; 
        //     break;
        //     case 7:
        //     console.log("asd6")
        //     output.innerHTML = this.value; 
        //     break;
        //     case 8:
        //     console.log("asd7")
        //     output.innerHTML = this.value; 
        //     break;
        //     case 9:
        //     console.log("asd8")
        //     output.innerHTML = this.value; 
        //     break;
        //     case 10:
        //     console.log("asd9")
        //     output.innerHTML = this.value; 
        //     break;
        //     case 11:
        //     console.log("asd11")
        //     output.innerHTML = this.value; 
        //     break;
        //     case 12:
        //     console.log("asd12")
        //     output.innerHTML = this.value; 
        //     break;
        //     default:
        //     console.log( typeof this.value)
        //     output.innerHTML = this.value; 
        //     break;
        // }
        ///
        // Display the default slider value
            
            slider.oninput = function() {
              
             output.innerHTML = "this.value";
             switch(this.value){
                case "1":
                
                output.innerHTML ="Janeiro"
                break;
                case "2":
               
                output.innerHTML =  "Fevereiro"; 
                break;
                case "3":
               
                output.innerHTML = "Março"; 
                break;
                case "4":
           
                output.innerHTML = "Abril"; 
                break;
                case "5":
               
                output.innerHTML ="Maio"; 
                break;
                case "6":
                
                output.innerHTML ="Junho";
                break;
                case "7":
               
                output.innerHTML = "Julho";
                break;
                case "8":
               
                output.innerHTML = "Agosto";
                break;
                case "9":
               
                output.innerHTML = "Setembro";
                break;
                case "10":
               
                output.innerHTML = "Outubro";
                break;
                case "11":
               
                output.innerHTML = "Novembro";
                break;
                case "12":
               
                output.innerHTML = "Dezembro";
                break;
                default:
              
                output.innerHTML = this.value; 
                break;
            }
            }

       
        
        // Update the current slider value (each time you drag the slider handle)

    }


}






export {Caixa}