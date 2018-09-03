import React, { Component } from 'react';
import Button from '../components/Button.js'

export default class Timer extends Component {
    constructor(props){
        super(props)

        this.state = {
            timeLeft: this.props.initialTime
        }
    }
  
    stopTimer = () => {
        //to be completed
    }
    
    saveTimer = () => {
        //to be completed
    }

    componentDidMount(){
        setInterval(this.tick, 1000)
    }

    tick = () => {
        if(this.state.timeLeft > 0){
            var interval = 1000
            this.setState({
                timeLeft: (this.state.timeLeft - interval/1000)
            })
        }
    }

    render() {
    return (
      <div className="TimerWindow">
        <h1>{this.props.name}</h1>
        <p>
            Time left: {this.state.timeLeft}
        </p>
        <p>
            <Button name="Stop" handleClick={this.stopTimer}/>
            <Button name="Save"handleClick={this.saveTimer}/>
        </p>
      </div>
    );
  }
}
