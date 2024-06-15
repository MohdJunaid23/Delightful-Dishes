import React from 'react'
import AppRouter from './routes/AppRouter'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <AppRouter/>
    </div>
  )
}

export default App