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

    <td>  <font size="3" color="black">Anderson</font></td>
 
    <td>  <font size="3" color="black">50</font></td>
    <td>  <font size="3" color="black">20</font></td>
  </tr>
  <tr>
  <td>  <font size="3" color="black">Anderson</font></td>
  <td>  <font size="3" color="black">1</font></td>
  <td>  <font size="3" color="black">2</font></td>
  </tr>
  <tr>
  <td>  <font size="3" color="black">Anderson</font></td>
  <td>  <font size="3" color="black">11</font></td>
  <td>  <font size="3" color="black">2</font></td>
  </tr>
</tfoot>
</table>
</div>

    );

}


}


export {Table}