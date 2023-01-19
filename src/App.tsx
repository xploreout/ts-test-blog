import React from 'react'
import { RouteErrorContext } from 'react-router/dist/lib/context'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import Header from './components/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App: React.FC = () => {
  return (
    <>
      <div className=' '>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
