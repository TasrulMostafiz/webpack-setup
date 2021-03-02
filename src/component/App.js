import React, { Component } from 'react';
import Todolist from './Todolist'
import AddTodo from './AddTodo'
class App extends Component{

    constructor(props){
        super(props);
        this.state={
            todos:[
                {
                  "userId": 1,
                  "id": 1,
                  "title": "delectus aut autem",
                  "completed": false
                },
                {
                  "userId": 1,
                  "id": 2,
                  "title": "quis ut nam facilis et officia qui",
                  "completed": false
                },
                {
                  "userId": 1,
                  "id": 3,
                  "title": "fugiat veniam minus",
                  "completed": false
                },
                {
                  "userId": 1,
                  "id": 4,
                  "title": "et porro tempora",
                  "completed": true
                },
                {
                  "userId": 1,
                  "id": 5,
                  "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                  "completed": false
                }
            ]
        };
    } 


    handldeClick(data){
        const list=this.state.todos;        

        var v={
            "userId": 1,
            "id": list.length==0?"1": list[list.length-1].id+1,
            "title": data,
            "completed": false
          }

          list.push(v);

        this.setState({
            todos:list,            
          });
            
    }

    render() {       
        
        return (
            <div>
                <h1>Skyblue Again</h1>
                <Todolist
                todolist={this.state.todos}
                ></Todolist>
                <AddTodo onClick={(i)=>this.handldeClick(i)}></AddTodo>
            </div>
        );
    }
}
export default App;