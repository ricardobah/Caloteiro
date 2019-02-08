import React, {Component} from 'react'
import {Table} from'./table.js'

class Home extends Component{

    
      

render(){

      
    return(
        <div>
            <br/>
            <h2>Caloteiros</h2>
            <br/>
            <div class="form-group">
                <label>First check in:</label>
                <input type="text" class="form-control form-control-1 input-sm from" placeholder="CheckIn" /> 
            </div>
            <Table/>
          

        </div>
    );

}


}


export {Home}