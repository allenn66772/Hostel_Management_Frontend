
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Staff_Login from './login/Staff_Login'
import UserLogin from './login/UserLogin'
import AddRoom from './pages/Addroom'
import ComplaintDisplay from './pages/ComplaintPage'
import FeesPage from './pages/Fees'
import Home from './pages/Home'

function App() {
 

  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='addroom' element={<AddRoom/>}/>
     <Route path='fees' element={<FeesPage/>}/>
     <Route path='complaintpage' element={<ComplaintDisplay/>}/>

    </Routes>
     <Header/>
     <Home/>
     {/* <AddRoom/> */}
     {/* <UserLogin/> */}
     {/* <Staff_Login/> */}
     {/* <ComplaintDisplay/> */}
     {/* <FeesPage/> */}

    </>
  )
}

export default App
