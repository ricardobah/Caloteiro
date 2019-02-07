import React, {Component} from 'react'


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
        'background-color': '#4CAF50',
        'color': 'white'
      }

    
      
    return(
<div style={ divStyle}>
<table className="col-8" >
  <tr>
    <th style = {thd}>Nome</th>
   
    <th style = {thd}>Pagamento</th>
  </tr>
  <tr>
    <td>Jill</td>
    
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
   
    <td>80</td>
  </tr>
</table>
</div>

    );

}


}


export {Table}