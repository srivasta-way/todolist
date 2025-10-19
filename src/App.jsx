import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './components/todolist'
import NewStuff from './components/NewStuff'
import Tocheck from './components/Tocheck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todolist />
    <p>what is happening?</p>
    <NewStuff />
    <Tocheck />
    </>
  )
}

export default App
