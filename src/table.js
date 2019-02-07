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
    <th style = {thd}>Nome</th>
   
    <th style = {thd}>Pagamento</th>
    <th style = {thd}>Serasa</th>
  </tr>
</thead>
<tfoot>

  <tr>
    <td>Anderson</td>
    
    <td>50</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Naila</td>
    
    <td>94</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Joaci</td>
   
    <td>80</td>
    <td>50</td>
  </tr>
</tfoot>
</table>
</div>

    );

}


}


export {Table}