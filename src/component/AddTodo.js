import React, { Component } from 'react'


export class AddTodo extends Component {
    

    handleClick(){
        if(this.handleChange()){
            this.props.onClick(document.getElementById("txtTodo").value);
            document.getElementById("txtTodo").value="";
        }
    }

    handleChange(){
        if(document.getElementById("txtTodo").value==""){
            document.getElementById("myDiv").style.display = "block";
            return false;                      
        }else{
            document.getElementById("myDiv").style.display = "none";
            return true;
        }
    }    

    render() {        
        return (
            <div className="box">
                <h4>Add Todo</h4>
                <div className="row">
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="txtTodo" onChange={()=>this.handleChange()}   placeholder="Todo"></input>
                    </div>
                    <div className="col-md-2">
                        <button type="submit" onClick={()=>this.handleClick()} className="btn btn-primary">Add</button>
                    </div>                    
                </div>

                <div className="row" id="myDiv" style={{display:"none"}}>
                    <div className="col-md-10">
                        <div className="alert alert-danger" >
                            <strong>Woops!</strong> You can not leave it blank.
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>                    
                </div>
                
            </div>
        )
    }
}

export default AddTodo;