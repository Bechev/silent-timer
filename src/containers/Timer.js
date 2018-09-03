import React, { Component } from 'react';
import Button from '../components/Button.js'

export default class TimerWindow extends Component {
    constructor(props){
        super(props)
    }
  
    render() {
    return (
      <div className="TimerWindow">
        <h1>{this.props.name}</h1>
        <p>
            Time left: {this.props.timeLeft}
        </p>
        <p>
            <Button name="Stop"/>
            <Button name="Save"/>
        </p>
      </div>
    );
  }
}
