import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './pages/Home.jsx'
import { Busqueda } from './pages/Busqueda.jsx'
import { Route } from './components/Route.jsx'

export default function App () {
  return (
    <>
      <Header />
      <Route path='/' component={Home} />
      <Route path='/busqueda' component={Busqueda} />
      <Footer />
    </>
  )
}
