import React from 'react'

function Greeting() {
    const name = 'Abhijith';
  const place = 'Chembur';
  return (
    <React.Fragment>
      <h1>Hello {name},</h1>
      <p>Welcome to {place}</p>
    </React.Fragment>
  )
}

export default Greeting