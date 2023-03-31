import { useState } from 'react'
import Blogs from './components/Blog/Blogs'
import './App.css'
import Header from './components/Header/Header'

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
    </div>
  )
}

export default App
