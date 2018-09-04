import React, { Component } from 'react';
import Button from '../components/Button'
import Timer from './Timer'

export default class Home extends Component {
    constructor(props){
  
        super(props)
        this.state ={
            initialTime: 10,
            timersList:[]
        }
    }

    incrementInitialTime = () => {
      this.setState({
        initialTime: this.state.initialTime + 1
      })
    }

    decrementInitialTime = () => {
      if (this.state.initialTime > 0) {
        this.setState({ 
          initialTime: this.state.initialTime - 1})
      }
    }
    
    componentDidMount(){
      this.startNewTimer()
    }

    startNewTimer = () => {
      this.setState({
        timersList: [...this.state.timersList, <Timer initialTime = {this.state.initialTime} />]
      })
    }

    render() {
    return (
      <div className="Timer">
      <div>
        <p>
          <Button 
            name = "+" 
            handleClick = {this.incrementInitialTime.bind(this)}
          />
          {this.state.initialTime}  
          <Button 
            name ="-" 
            handleClick = {this.decrementInitialTime.bind(this)}
          />
        </p
        ><br></br>
        <p><Button name ="Start Timer" handleClick={this.startNewTimer.bind(this)}/></p>
      </div>
        <div>
          {this.state.timersList}
        </div>
      </div>
    );
  }
}
