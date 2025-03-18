import React from "react"
import Wow from './Wow.jsx'
import Wee from './Wee.jsx'

function App() {
  return (
    <>
      Welcome
      <Wow />
      <h1><Hello /></h1>
      <Hello />
      <Wow />
      <Hi />
      <Hello />
      <Wee />
    </>
  )
}

function Hello(){
  return(
    <React.Fragment>
      Hello....
    </React.Fragment>
  )
}

function Hi(){
  return(
    <div>
      Hi....
    </div>
  )
}

export default App
