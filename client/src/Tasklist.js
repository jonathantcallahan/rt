import React, { Component } from 'react';

class Tasklist extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskList: [],
            task: ''
        }
        this.update = this.update.bind(this)
    }
    componentDidMount(){
    }
    componentDidUpdate(){
    }
    update({target}){
        this.setState({[target.name]:target.value})
    }
    render(){
        return (
            <div>
                <input name='task' value={this.state.task} onChange={this.update}></input>
                <div onClick={() => this.props.tasks.add(this.state.task)}>create task</div>
                <div className='task-container'>
                    <span className='task-header'>tasks</span>
                    {this.props.state.taskList && this.props.state.taskList.map((e,i) => {
                        console.log(e)
                        return (
                            <div>
                                <span 
                                    key={`delete_${e[0]}`} 
                                    onClick={() => this.props.tasks.delete(e[0])}>
                                    delete</span>
                                <span 
                                    key={`task_${e[0]}`}>
                                    {e[0]}</span>
                                <input 
                                    key={`status_${e[0]}`}
                                    type='checkbox'
                                    defaultChecked={e[1]}
                                    onClick={() => this.props.tasks.complete(e[0])}></input>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Tasklist;