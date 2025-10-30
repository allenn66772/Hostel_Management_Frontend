
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import UserLogin from './login/UserLogin'
import AddRoom from './pages/Addroom'
import Home from './pages/Home'

function App() {
 

  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='addroom' element={<AddRoom/>}/>

    </Routes>
    </>
  )
}

export default App
