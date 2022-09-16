import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
// import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

const App = () => {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    } 
    ) 
    setTimeout(() => {
      setAlert(null)
    }, 1400);    
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Changer" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>} > */}

            {/* </Route> */}

            {/* <Route exact path="/" element={ */}
            <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>

            {/* </Route>
      </Routes> */}

    </div>
    {/* </Router> */}
    </>
  ) 
}
 
export default App
