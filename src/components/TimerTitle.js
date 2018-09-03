import React from 'react'


export default class TimerTitle extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <form onChange = {this.props.handleChange}>
            <input 
                type= "text"
                value = {this.props.name}
            />
            </form>
        )
    }
}