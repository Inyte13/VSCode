import { Routes, Route } from 'react-router'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { lazy, useState } from 'react'

const Home = lazy(() => import('./pages/Home.jsx'))
const Busqueda = lazy(() => import('./pages/Busqueda.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))
const Job = lazy(() => import('./pages/Job.jsx'))

export default function App () {
  const [isLogueado, setIsLogueado] = useState(true)
  const manejarLogin = () => {
    setIsLogueado(true)
  }

  const manejarLogout = () => {
    setIsLogueado(false)
  }

  return (
    <>
      <Header
        isLogueado={isLogueado}
        onLogin={manejarLogin}
        onLogout={manejarLogout}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/busqueda' element={<Busqueda />} />
        <Route path='/jobs/:id' element={<Job isLogueado={isLogueado} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}
