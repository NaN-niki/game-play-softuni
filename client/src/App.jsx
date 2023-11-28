import { Catalog } from './components/catalog/catalog'
import { CreateGame } from './components/create/CreateGame'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/login/Login'
import { Register } from './components/register/Register'

function App() {

  return (
    <div id='box'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='games' element={<Catalog />} />
        <Route path='games/create' element={<CreateGame />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
