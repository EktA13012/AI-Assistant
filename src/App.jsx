/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { FiMic } from "react-icons/fi";
import { datacontext } from './context/UserContext';
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"

function App() {
  const { recognition, speaking, setSpeaking, prompt, response, setPrompt, setResponse } = useContext(datacontext);


  return (
    <div className='main'>
      <img src={va} alt="" id ="Alsa"/>
      <span>Hello, I am Elsa,
        Your Virtual Assistant</span>
        {!speaking ? <button onClick={()=>{
          setPrompt("listening...")
          setSpeaking(true)
          setResponse(false)
          recognition.start()      
        }}>Click here <FiMic /></button>
        :
        <div className='response'>
          {!response ? <img src={speakimg} alt="" id="speak" />:
          <img src={aigif} alt="" id="aigif" />
          }
          
          <p>{prompt}</p>
           </div>
        } 
        
    </div>
  )
}

export default App
