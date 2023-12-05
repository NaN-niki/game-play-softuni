import { Catalog } from './components/catalog/catalog'
import { CreateGame } from './components/create/CreateGame'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/login/Login'
import { Register } from './components/register/Register'
import { GameDetails } from './components/details/Details'
import { useState } from 'react'

function App() {

  //authentication data shte q durjim tuk (za lognatiq user)
  //danni koito survura vrushta kato se lognem i koito iskame da zapazim
  const [auth, setAuth] = useState({})

  //callback koito chaka da bude izvikan ot login i da mu podade values i da zapochne da se izpulnqva logikata tuk
  //login podava dannite 
  const loginSubmitHandler = (values) => {
    console.log(values)
  }

  return (
    <div id='box'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='games' element={<Catalog />} />
        <Route path='games/create' element={<CreateGame />} />
        <Route path='games/:id/details' element={<GameDetails />} />
        <Route path='login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App

