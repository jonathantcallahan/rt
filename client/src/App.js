import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tasklist from './Tasklist'

class App extends Component {
  constructor(){
    super()
    this.state = {
      test:'asdf',
      rn: 0,
      taskList: {}
    }
    this.tasks.list = this.tasks.list.bind(this)
    this.tasks.add = this.tasks.add.bind(this)
    this.tasks.delete = this.tasks.complete.bind(this)
    this.getTasks = this.getTasks.bind(this)
  }
  getTasks(){ return JSON.parse(localStorage.getItem('tasks')) }
  setTasks(tasks){ localStorage.setItem('tasks', JSON.stringify(tasks)); this.setState({taskList: tasks}) }
  tasks = {
    list: () => {
      // console.log(this.state)
      const t = this.getTasks()
      this.setState({rn: Math.floor(Math.random() * 10)})

    },
    add: name => {
      const t = this.getTasks()
      t[name] = false
      this.setTasks(t)
    },
    complete: name => {

    }
  }
  componentDidMount(){
    localStorage.getItem('tasks') == null && localStorage.setItem('tasks',JSON.stringify({}))
    
  }
  render() {
    return (
      <div className="App">
        <Tasklist tasks={this.tasks} state={{...this.state}}/>
      </div>
    );
  }
}

export default App;
