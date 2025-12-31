import { Routes, Route } from 'react-router'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './pages/Home.jsx'
import { Busqueda } from './pages/Busqueda.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { Job } from './pages/Job.jsx'

export default function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/busqueda' element={<Busqueda />} />
        <Route path='/jobs/:id' element={<Job />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}
