import React from 'react';
import {connect} from 'react-redux';

import {addTask} from '../actions';

class List extends React.Component{
    state = {
        newTask: ''
    }

    handleChanges = e => {
        this.setState({newTask: e.target.value})
    }

    addNewTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask);
    }

    render(){
        return(
            <div>
                <h1>To Do List</h1>
                <form onSubmit={this.addNewTask}>
                <input 
                    type="text"
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                    placeholder="New Task"
                />
                <button type="submit">Add Item</button>
                </form>
                <div>
          {this.props.todos.map((todo, index) => (
            <p key={index}>
              {todo.task}
            </p>
          ))}
        </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(
    mapStateToProps,
    { addTask }
  )(List);

