import React from 'react'
import WelcomeChild from './WelcomeChild'

function Welcome(props) {
  return (
    <div>
        <h3>Welcome {props.names} a student of {props.course}</h3>
        <WelcomeChild/>
    </div>
    
  )
}

export default Welcome