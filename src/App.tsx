import { useState } from 'react'
import Draw from './components/Draw'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Draw />
    </>
  )
}

export default App
