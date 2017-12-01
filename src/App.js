// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {

  constructor(){
    super();

    this.state={
      tasks: ["first", "second", "third"],
      input: ''
    }

  }

// Establish a function that we are going to be passing
// into the Todo Component.

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input: '',
    })
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  render() {
    let tasks = this.state.tasks.map((task,index)=>
        <Todo key={index} task={task} />
      )

    return (
      <div>

        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <input onChange={(event)=>this.handleChange(event)}/>
          <input type="submit"/>
        </form>

        {this.state.tasks.map((task,index)=>
          <li>{task}</li>
          )}
          

      </div>
      
    );
  }
}


// Change the state of both the local component and the parent component
// introduce the local loop and creating a new component to handle the loop
// talk about key in the <li>
// constructor method


export default App;
