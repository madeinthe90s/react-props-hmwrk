import React from 'react';



class Todo extends React.Component{

render(){
	console.log(this.props)
  return(
    <div>
    	<li>{this.props.task}</li>
    </div>
  )
}

}

export default Todo
