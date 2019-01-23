import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tasklist from './Tasklist'

class App extends Component {
  constructor(){
    super()
    this.state = {
      test:'asdf'
    }
    this.tasks.list = this.tasks.list.bind(this)
    this.tasks.add = this.tasks.add.bind(this)
    this.tasks.delete = this.tasks.delete.bind(this)
  }
  tasks = {
    list: () => {
      // console.log(this.state)
      const t = JSON.parse(localStorage.getItem('tasks'))
    },
    add: name => {

    },
    delete: id => {

    }
  }
  componentDidMount(){
    localStorage.getItem('tasks') == null && localStorage.setItem('tasks',JSON.stringify({}))
    
  }
  render() {
    return (
      <div className="App">
        <Tasklist tasks={this.tasks}/>
      </div>
    );
  }
}

export default App;
