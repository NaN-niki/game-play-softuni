import { Catalog } from './components/catalog/catalog'
import { CreateGame } from './components/create/CreateGame'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/login/Login'
import { Register } from './components/register/Register'
import { GameDetails } from './components/details/Details'

function App() {

  return (
    <div id='box'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='games' element={<Catalog />} />
        <Route path='games/create' element={<CreateGame />} />
        <Route path='games/:id/details' element={<GameDetails />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App


// "c64db398-91cd-487c-b900-86058c0422f8": {
//   "title": "Action game",
//   "category": "Action",
//   "maxLevel": "40",
//   "imageUrl": "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/01/action-adventure-games-tomb-raider.jpg",
//   "summary": "Summary here",
//   "_id": "c64db398-91cd-487c-b900-86058c0422f8"
// },
// "daf55cd4-9aa1-4b7a-82a9-fbdb74aaa84b": {
//   "title": "asdasd",
//   "category": "asdasd",
//   "maxLevel": "1213",
//   "imageUrl": "https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000",
//   "summary": "asdasdasd",
//   "_id": "daf55cd4-9aa1-4b7a-82a9-fbdb74aaa84b"
// },
// "18bfdb21-333b-42bd-a32c-c114263f2569": {
//   "title": "adsfasdfasd",
//   "category": "asdfasdf",
//   "maxLevel": "123",
//   "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Ultimate_MK3.png/220px-Ultimate_MK3.png",
//   "summary": "MK3",
//   "_id": "18bfdb21-333b-42bd-a32c-c114263f2569"
// }
