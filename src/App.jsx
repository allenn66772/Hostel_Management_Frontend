import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Admin/LandingPage'
import Login from './Admin/Login'
import Complaint from './Admin/Complaint'
import Student from './Admin/Student'
import Staff from './Admin/Staff'
import Rooms from './Admin/Rooms'

function App() {

  return (
    <>
      <Routes>
        <Route path='/adminDashboard' element = {<LandingPage/>}/>
        <Route path='/' element = {<Login/>}/>
        <Route path='/complaints' element = {<Complaint/>}/>
        <Route path='/students' element={<Student/>}/>
        <Route path='/staffs' element={<Staff/>}/>
        <Route path='/rooms' element={<Rooms/>}/>

      </Routes>
    </>
  )
}

export default App
