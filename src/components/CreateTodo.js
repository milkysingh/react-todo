import React,{Component} from 'react';

 export default class CreateTodo extends Component {
   
    state={
        error:undefined
    };
    handleForm=(e)=>{
        e.preventDefault();
        let title = e.target.elements.newTodo.value;
        console.log(title);
        let error=this.props.handleAddTodo({title})
        this.setState( {error});

        if(!error){
            e.target.elements.newTodo.value='';
        }
     
    }
    render() {
        return(
            <div>
            {this.state.error&&<strong>{this.state.error}</strong>}
                <form className="form-group" onSubmit={this.handleForm}>
                    <input  placeholder='Create a Todo' className="form-control" type="text" name='newTodo' />
                     <button className="btn btn-success">+</button>
                </form>
            </div>
        )
    }
}