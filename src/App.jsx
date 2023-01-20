import { useState } from 'react'
import logo from './logo.svg'
//import './App.css'
import Start from './components/start/Start'
import style from './App.module.css'

function App() {

  return (
    <div className={style.App}>
      <p>Portafolio</p>
      <p>Header</p>
      <Start />
      <p>tech</p>
      <p>projects</p>
      <p>Footer</p>
    </div>
  )
}

export default App
