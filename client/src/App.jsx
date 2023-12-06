import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import AuthContext from './contexts/authContext'
import * as authService from './services/authService'

import { Catalog } from './components/catalog/catalog'
import { CreateGame } from './components/create/CreateGame'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Login } from './components/login/Login'
import { Register } from './components/register/Register'
import { GameDetails } from './components/details/Details'

function App() {

  //authentication data shte q durjim tuk (za lognatiq user)
  //danni koito survura vrushta kato se lognem i koito iskame da zapazim
  const [auth, setAuth] = useState({})
  const navigate = useNavigate()

  //callback koito chaka da bude izvikan ot login i da mu podade values i da zapochne da se izpulnqva logikata tuk
  //login podava dannite 
  const loginSubmitHandler = async (values) => {
    const data = await authService.login(values.email, values.password)
    setAuth(data)
    navigate('/')
  }

  const registerSubmitHandler = async (values) => {
    const data = await authService.register(values.email, values.password)
    setAuth(data)
    navigate('/')
  }

  const authContextValues = {
    email: auth.email,
    username: auth.username || auth.email,
    token: auth.token,
    _id: auth._id,
    isAuthenticated: Boolean(auth.email)
  }

  console.log(auth)


  return (
    <div id='box'>
      <AuthContext.Provider value={authContextValues}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='games' element={<Catalog />} />
          <Route path='games/create' element={<CreateGame />} />
          <Route path='games/:id/details' element={<GameDetails />} />
          <Route path='login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
          <Route path='register' element={<Register registerSubmitHandler={registerSubmitHandler} />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App

