import React, { Component } from 'react';

import './App.css';
import List from './components/List';
import CreateTodo from './components/CreateTodo'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [{
          title: "buy a pencil"
        },
        {
          title: "go to gym"
        },
        {
          title: "walk the dog"
        }
      ]
    }
    this.handleRemoveAll=this.handleRemoveAll.bind(this);
    this.handleRemoveTodo=this.handleRemoveTodo.bind(this);
    this.handleAddTodo=this.handleAddTodo.bind(this);
  }
  handleRemoveAll=function(){
    this.setState(()=>({todos:[]}));
  }
  handleRemoveTodo=function(deleteTodo) {
  
    this.setState(
      (prevState) =>{
        let updateTodos=prevState.todos.filter(todo=>todo.title!==deleteTodo&&todo)
    
        return {
          todos:updateTodos
        }
      }
    );
  }

  handleAddTodo(newTodo){

    if(!newTodo.title){
      return 'Enter a Todo !';
    }
    else if(this.state.todos.map(todo=>todo.title).indexOf(newTodo.title)>-1){
      
      return 'Todo already exist!';
    }
  
    this.setState(
      (prevState) =>{
        return{
          todos:prevState.todos.concat(newTodo)
        }
      }
    )
  }


  render() {
    return (
      <div className="App container">

      <div className="jumbotron" id="jumbo">

      <h2 className="text-center"> Todo-List</h2>

      <div className="row" > 

        <div className="col-xs-12" >

       <List
        todos={this.state.todos}

        handleRemoveTodo={this.handleRemoveTodo}
        
        />
     
        </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
              <CreateTodo  handleAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      
       {this.state.todos.length>0 &&<button  className="btn btn-danger pull-right " onClick={this.handleRemoveAll}>Delete all</button> }
      
       

       </div>
      
      </div>
    );
  }
}

export default App;
