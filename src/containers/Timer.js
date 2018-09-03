import React, { Component } from 'react';
import Button from '../components/Button.js'
import TimerTitle from '../components/TimerTitle.js'

export default class Timer extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "Timer",
            timeLeft: this.props.initialTime,
            isOn: true
        }
    }
  
// Component lifecycle management
    componentDidMount(){
        this.intervalId = setInterval(this.tick, 1000)
    }

    componentDidUnmount(){
        clearInterval(this.intervalId)
    }
    
    tick = () => {
        if(this.state.timeLeft > 0 && this.state.isOn === true){
            var interval = 1000
            this.setState({
                timeLeft: (this.state.timeLeft - interval/1000)
            })
        }
    }

//Timertitle functions
    handleNameChange = (event) => {
        event.preventDefault()
        console.log(this.state.name)
        this.setState({
            name: event.target.value
        })
        console.log(this.state.name)
    }

// Button functions
    stopTimer = () => {
        this.setState({
            isOn: false
        })
    }

    resumeTimer = () => {
        this.setState({
            isOn: true
        })
    }
    
    saveTimer = () => {
        //to be completed
    }

//Rendering
    render() {
    return (
      <div className="Timer">
        <h1><TimerTitle name = {this.state.name} handleChange={this.handleNameChange}/></h1>
        <p>
            Time left: {this.state.timeLeft}
        </p>
        <p>
            <Button name="Stop" handleClick={this.stopTimer}/>
            <Button name="Resume" handleClick={this.resumeTimer}/>
            <Button name="Archive"handleClick={this.archiveTimer}/>
        </p>
      </div>
    );
  }
}
