import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FooterSection from './components/FooterSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HeroSection />
      <FooterSection />
    </>
  )
}

export default App
