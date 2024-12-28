import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Tbl from './components/Tbl'
import Counter from './components/Counter'
import Statebasics from './components/Statebasics'
import Selection from './components/Selection'
import Api from './components/Api'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/tbl" element={<Tbl />} />
        <Route path="/statebasics" element={<Statebasics />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/api" element={<Api />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      {/* <Login /> }
      {/* <Signup/> }
      {/* <Tbl/> */}
    </>
  )
}

export default App
