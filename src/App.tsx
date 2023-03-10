import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Gallery } from './components/Gallery'
import { NavBarMenu } from './components/NavBarMenu'
import { Home } from './pages/Home'
import { StateExample } from './pages/StateExample'
import { Index } from './pages/Index'
import { Register } from './pages/Register'
import { Login } from './pages/Login'

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Home' element={<Home />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
