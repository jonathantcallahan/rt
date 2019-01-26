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
      taskList: []
    }
    this.tasks.list = this.tasks.list.bind(this)
    this.tasks.add = this.tasks.add.bind(this)
    this.tasks.complete = this.tasks.complete.bind(this)
    this.getTasks = this.getTasks.bind(this)
  }
  getTasks(){ return JSON.parse(localStorage.getItem('tasks')) }
  setTasks(tasks){
    tasks = tasks ? tasks : this.getTasks()
    localStorage.setItem('tasks', JSON.stringify(tasks))
    const taskArray = [] 
    for(let key in tasks){
      taskArray.push([key,tasks[key]])
    } 
    this.setState({taskList: taskArray}, () => console.log('setTasks ran', this.state)) 
  }
  tasks = {
    list: () => {
      // console.log(this.state)
      // this.setState({rn: Math.floor(Math.random() * 10)})

    },
    add: name => {
      const t = this.getTasks()
      t[name] = false
      this.setTasks(t)
    },
    complete: task => {
      console.log('tasks.complete ran', task)
      const t = this.getTasks()
      t[task] = !t[task]
      console.log(t)
      this.setTasks(t)
    },
    delete: task => {
      console.log(task)
      const t = this.getTasks()
      delete t[task]
      this.setTasks(t)
    }
  }
  componentDidMount(){
    localStorage.getItem('tasks') == null && localStorage.setItem('tasks',JSON.stringify({}))
    this.setTasks()
    
    
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
