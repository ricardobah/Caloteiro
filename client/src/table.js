import React, {Component} from 'react'
import './table.css'

class Table extends Component{

    
      

render(){
    const divStyle = {
        'overflow-x ':'auto',
        "height": "100%",
        "min-height": "100%",
        "display": "flex",
        "-webkit-align-items": "center",
        "align-items": "center",
        "-webkit-justify-content": "center",
        "justify-content": "center"
       
      };
      const thd = {
        
        'color': 'white'
      }

    
      
    return(
<div style={ divStyle}>

<table className="col-8" className="blueTable" >
<thead >

  <tr>
    <th  style = {thd}>Nome</th>
   
    <th style = {thd}>Pagamento</th>
    <th style = {thd}>Serasa</th>
  </tr>
</thead>
<tfoot>

  <tr>

    <td>  <font size="3" color="green">Cabeça</font></td>
 
    <td>  <font size="3" color="green">-100</font></td>
    <td>  <span className="glyphicon glyphicon-play text-success">Pago</span></td>
  </tr>
  <tr>
  <td>  <font size="3" color="red">Anderson</font></td>
  <td>  <font size="3" color="red">15</font></td>
  <td>  <span className="glyphicon glyphicon-play text-danger">Caloteiro!</span></td>
  </tr>
  <tr>
  <td>  <font size="3" color="green">Ricardo</font></td>
  <td>  <font size="3" color="green">0</font></td>
  <td>  <span className="glyphicon glyphicon-play text-success">Pago</span></td>
  </tr>
</tfoot>
</table>
</div>

    );

}


}


export {Table}