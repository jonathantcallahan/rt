import React, { Component } from 'react';

class Tasklist extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        console.log(this.props.tasks)
        this.setState(({t:this.props.tasks}),() => console.log(this.state))
    }
    render(){
        return (
            <div>
                <div onClick={this.state.t && this.state.t.list}>asdf</div>
            </div>
        )
    }
}

export default Tasklist;