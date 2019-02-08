import React, {Component} from 'react'
import {Table} from'./table.js'




class Home extends Component{

    
      

    render(){

        
        return(
            <div>
                <br/>
                <h2>Caloteiros</h2>
                <br/>
                <div className="form-group">
                 
                    <label>First check in:</label>
                    <input id ='from1' type="text" className="form-control form-control-1 input-sm from" placeholder="CheckIn" /> 
                </div>
                <Table/>
            

            </div>
        );

    }


}

            
        export {Home}