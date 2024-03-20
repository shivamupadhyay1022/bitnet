import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'flowbite-react'
import CNavbar from './components/CNavbar.tsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Academic from './pages/Academic.jsx'
import Yearone from './components/Yearone.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/academic" element={<Academic />} />
          <Route exact path="/skill" element={<Home />} />
          <Route exact path="/club" element={<Home/>} />
          <Route exact path="/gallery" element={<Home />} />
          <Route exact path="/year1" element={<Yearone />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
