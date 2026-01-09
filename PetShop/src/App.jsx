import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import './App.css'
import { Route, Routes } from 'react-router'
import { lazy } from 'react'
const Catalogo = lazy(() => import('./pages/Catalogo.jsx'))

export default function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Catalogo />} />
      </Routes>
      <Footer />
    </>
  )
}
