import reactLogo from './assets/react.svg'
import NavBar from './components/Navbar'
import MainContent from './components/Main'
import React from 'react'
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  } 

  return (
    <div className="App">
      <NavBar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <MainContent darkMode={darkMode} />
    </div>
  )
}
