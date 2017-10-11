import React from 'react';

const ListItem=(props)=> {


    return (
        <div>
            <li className="list-group-item" id="todoDisplay">
             {props.todo.title} 
             <button
            className="btn btn-danger btn-xs pull-right"
            onClick={(e)=>{props.handleRemoveTodo(props.todo.title)}}
            >
            -
            </button>
            </li>
        </div>
    )
}

export default ListItem;