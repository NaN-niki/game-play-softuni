import { Route, Routes } from 'react-router-dom'
import AuthProvider from './contexts/authContext'

import { Catalog } from './components/catalog/catalog'
import { CreateGame } from './components/create/CreateGame'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Login } from './components/login/Login'
import { Register } from './components/register/Register'
import { GameDetails } from './components/details/Details'
import Logout from './components/logout/Logout'
import ErrorBoundry from './components/errorBoundry'

function App() {

  return (
    <div id='box'>
      <ErrorBoundry>
        {/* obgrushta chastta ot durvoto v koqto ochakvame da hvanem greshkata */}

        <AuthProvider>  {/* pak vrushta provider */}
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='games' element={<Catalog />} />
            <Route path='games/create' element={<CreateGame />} />
            <Route path='games/:id/details' element={<GameDetails />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='logout' element={<Logout />} />
          </Routes>
        </AuthProvider>
      </ErrorBoundry>
    </div>
  )
}

export default App

