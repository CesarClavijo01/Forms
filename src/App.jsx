import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <SignUpForm setToken={setToken} token={token}/>
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App
