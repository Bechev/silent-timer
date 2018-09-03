import React, { Component } from 'react';
import Button from '../components/Button.js'
import TimerTitle from '../components/TimerTitle.js'

export default class Timer extends Component {
    constructor(props){
        super(props)
        
        let bgColor = '#0000' 
        
        this.state = {
            name: "Timer",
            timeLeft: this.props.initialTime,
            isOn: true,
            timerIsUp: false,
            bgColor: '#ffffff'
        }
    }
  
// Component lifecycle management
    componentDidMount(){
        this.intervalId = setInterval(this.tick, 1000)
    }

    componentDidUnmount(){
        clearInterval(this.intervalId)
    }

// Timer functionalities
    tick = () => {
        if(this.state.timeLeft > 0 && this.state.isOn === true){
            var interval = 1000
            this.setState({
                timeLeft: (this.state.timeLeft - interval/1000)
            })
        }else if(this.state.timeLeft === 0){
            this.setState({
                timerIsUp: true
            })
            this.silentRing()
        }
    }

    silentRing = () => {
        this.setState({
            bgColor: '#ff0000'
        })
    }


//Timertitle functions
    handleNameChange = (event) => {
        event.preventDefault()
        this.setState({
            name: event.target.value
        })
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
      <div className="Timer" style={{backgroundColor: this.state.bgColor}}>
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

