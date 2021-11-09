import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

import SearchKit from './components/SearchKit'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bio Kits</p>
      </header>
      <SearchKit></SearchKit>
    </div>
  )
}

export default App
