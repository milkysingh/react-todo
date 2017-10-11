import React from 'react';
import ListItem from './ListItem'
const List=(props)=> {

    let todos=props.todos.map(
        (todo)=>{
            return(
           <ListItem
            key={todo.title} 
            todo={todo} 
            handleRemoveTodo={props.handleRemoveTodo}
            />
            );
        }
    );
    return(
        <div>
            <ul className="list-group">
             {todos }
            </ul>
        </div>
    )
}
export default List;