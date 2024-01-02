import React, { Component } from 'react'

export default class ClassDemo extends Component {
    constructor(){
        super()
        this.state={
            message:"Welcome to state",
            id:12345
        }
    }

    changeMessage(){
      this.setState({
        message:"Hello Changes is done"
      })
    }
  render() {
    return (
      <div>ClassDemo
        <h3>Message is: {this.state.message}</h3>
        <h3>Id is: {this.state.id}</h3>
        <button onClick={()=>this.changeMessage()}>change</button>
      </div>
    )
  }
}
