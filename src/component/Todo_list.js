import React, { Component } from 'react'
import { addDevServerEntrypoints } from 'webpack-dev-server';


class Todo_list extends Component{

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

    render() {

        const todos=this.state.todos;
        // const items = todos.map((item)=>{
        //     return(
        //         <li key={item.id}>
        //             <button >{item.title}</button>
        //         </li>
        //     )

        // });

        console.log(todos);
        
        return (
            <div>
                <ol>
                    

                </ol>

            </div>
        );
    }
}
export default Todo_list;