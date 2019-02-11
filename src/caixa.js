import React,{Component} from 'react'
import {Dropdown,InputGroup,DropdownButton,FormControl,Button} from 'react-bootstrap'
import './switch.css'
import {getOption} from './chart.js'
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
                        <h3><font color="green">Resultado: 15</font></h3>
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



}






export {Caixa}