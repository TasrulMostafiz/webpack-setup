import React, { Component } from 'react'


class Todolist extends Component{   
    
    taskCompleted(id){

      // var input=document.getElementById(id);
      // var lbl=document.getElementById("lbl"+id);

      // if(input.checked){
      //   lbl.style.textDecoration = "line-through";
      // }else{
      //   lbl.style.textDecoration = "none";
      // }




      const list=this.props.todolist;
      // var pos;
      for (var i = 0; i < list.length; i++){
        if (list[i].id == id){          
          list[i].completed=!list[i].completed;  
          // pos=i;        
        }}

        this.setState({
          todos:list,            
        });
      

        // console.log("Changed");
        // console.log(list);

    }

    labelDecoration(completed){
      return {
        "textDecoration": completed?'line-through':'none',        
      };      
    }

    

    render() {

        const todos=this.props.todolist;
        // console.log("Default");
        // console.log(todos);
        const items = todos.map((item)=>{
            return(
              <li key={item.id}>
                <div className="form-check">
                  <input id={item.id} className="form-check-input" type="checkbox" checked={ item.completed }
                  onChange={() => this.taskCompleted(item.id)} ></input>
                  <label id={"lbl"+item.id} className="form-check-label" 
                    style={this.labelDecoration(item.completed)}
                  >{item.title}</label>
                </div>
              </li>
            )

        });

     
        return (
          <div className="box">
            <ul>
              {items}
            </ul>
          </div>
        );
    }
}
export default Todolist;