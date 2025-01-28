/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react'
import run from '../gemini';
export const datacontext = createContext()

function UserContext({ children }) {
  let [speaking, setSpeaking] = useState(false)
  let [prompt, setPrompt] = useState("listening...")
  let [response, setResponse] = useState(false)

  function speak(text) {
    // Clean up the text to remove asterisks and unwanted characters
    const sanitizedText = text.replace(/\*/g, "").trim(); // Removes all asterisks and trims extra spaces
  
    let text_speak = new SpeechSynthesisUtterance(sanitizedText);
  
    // Fetch available voices
    let voices = window.speechSynthesis.getVoices();
    text_speak.voice = voices.find(voice => voice.name.includes("Google UK English Female")) || voices[0];
  
    // Set speech properties
    text_speak.volume = 1; 
    text_speak.rate = 1; 
    text_speak.pitch = 1; 
    text_speak.lang = "en-GB";
  
    // Speak the cleaned text
    window.speechSynthesis.speak(text_speak);
  }
  
  
  async function aiResponse(prompt) {
    let text = await run(prompt)
    let newText = text.split("**") && text.split("*") && text.replace("google", "Ekta Verma") && text.replace("Google", "Ekta Verma")
    setPrompt(newText)
    speak(newText)
    setResponse(true)
    setTimeout(() => {
      setSpeaking(false)
    }, 5000)

  }
  let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  let recognition = new speechRecognition()
  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex
    let transcript = e.results[currentIndex][0].transcript
    setPrompt(transcript)
    takeCommand(transcript.toLowerCase())

  }

  function takeCommand(command) {
    if (command.includes("open") && command.includes("youtube")) {
      window.open("https://www.youtube.com", "_blank")
      speak("opening youtube")
      setResponse(true)
      setPrompt("opening youtube...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    } else if (command.includes("open") && command.includes("instagram")) {
      window.open("https://www.instagram.com", "_blank")
      speak("opening instagram")
      setResponse(true)
      setPrompt("opening instagram...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    }
    else if (command.includes("open") && command.includes("google")) {
      window.open("https://www.google.com", "_blank")
      speak("opening google")
      setResponse(true)
      setPrompt("opening google...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    } else if (command.includes("open") && command.includes("linkedin")) {
      window.open("https://www.linkedin.com", "_blank")
      speak("opening linkedin")
      setResponse(true)
      setPrompt("opening linkedin...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    } else if (command.includes("open") && command.includes("github")) {
      window.open("https://www.github.com", "_blank")
      speak("opening github")
      setResponse(true)
      setPrompt("opening github...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    } else if (command.includes("open") && command.includes("facebook")) {
      window.open("https://www.facebook.com", "_blank")
      speak("opening facebook")
      setResponse(true)
      setPrompt("opening facebook...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    } else if (command.includes("open") && command.includes("twitter")) {
      window.open("https://x.com/?lang=en", "_blank")
      speak("opening twitter")
      setResponse(true)
      setPrompt("opening twitter...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    } else if (command.includes("open") && command.includes("gmail")) {
      window.open("https://www.gmail.com", "_blank")
      speak("opening gmail")
      setResponse(true)
      setPrompt("opening gmail...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    } else if (command.includes("open") && command.includes("microsoft")) {
      window.open("https://www.microsoft.com", "_blank")
      speak("opening microsoft")
      setResponse(true)
      setPrompt("opening microsoft...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    } else if (command.includes("open") && command.includes("netflix")) {
      window.open("https://www.netflix.com", "_blank")
      speak("opening netflix")
      setResponse(true)
      setPrompt("opening netflix...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    }
    else if (command.includes("time")) {
      let time = new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric" })
      speak(time)
      setResponse(true)
      setPrompt(time)
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    }
    else if (command.includes("date")) {
      let date = new Date().toLocaleDateString(undefined, { day: "numeric", month: "short" })
      speak(date)
      setResponse(true)
      setPrompt(date)
      setTimeout(() => {
        setSpeaking(false)
      }, 5000)
    }

    else {
      aiResponse(command)
    }
  }


  let value = {
    recognition, speaking, setSpeaking, prompt, setPrompt, response, setResponse
  }
  return (
    <div>
      <datacontext.Provider value={value}>
        {children}
      </datacontext.Provider>

    </div>
  )
}

export default UserContext
