import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Product from './pages/Product'
import Cart from './pages/Cart'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </BrowserRouter>
  )
}

export default App
