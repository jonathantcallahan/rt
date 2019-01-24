import React, { Component } from 'react';

class Tasklist extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskList: {}
        }
        this.update = this.update.bind(this)
    }
    componentDidMount(){
        this.setState({t:this.props.tasks})
    }
    componentDidUpdate(){
        console.log(this.props)
    }
    update(){

    }
    render(){
        return (
            <div>
                <div onClick={this.state.t && this.state.t.list}>asdf</div>
                <input></input>
            </div>
        )
    }
}

export default Tasklist;