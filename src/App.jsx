import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Staff_Login from "./login/Staff_Login";
// import UserLogin from "./login/UserLogin";

import Allroom from "./pages/Allroom";

import FeesPage from "./pages/Fees";
import Home from "./pages/Home";
import Adminlogin from "./login/Adminlogin";
import Adminregister from "./login/Adminregister";
import Userregister from "./login/Userregister";
import ChooseLogin from "./login/ChooseLogin";
// import StaffRegister from "./login/StaffRegister";
import Adminhome from "./pages/Adminhome";
import ComplaintPage from "./pages/ComplaintPage";
import Viewmaintenence from "./pages/Viewmaintenence";
import Payfees from "./pages/Payfees";
import Allstudents from "./pages/Allstudents";
import Givecomplaint from "./pages/Givecomplaint";
// import Adminhome from './pages/Adminhome'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adreg" element={<Adminregister />} />
        <Route path="adminhome" element={<Adminhome />} />
        <Route path="adlog" element={<Adminlogin />} />
        <Route path="userreg" element={<Userregister />} />
        <Route path="userlog" element={<UserLogin/>} />
        {/* <Route path="staffreg" element={<StaffRegister />} /> */}
        {/* <Route path="stafflog" element={<Staff_Login />} /> */}
      
        <Route path="complaints" element={<ComplaintPage />} />
        <Route path="viewmain" element={<Viewmaintenence />} />
        <Route path="allroom" element={<Allroom />} />
        <Route path="fees" element={<FeesPage />} />
        <Route path="payfee" element={<Payfees />} />
        <Route path="choose" element={<ChooseLogin />} />
        <Route path="alluser" element={<Allstudents />} />
        <Route path="givecomplaint" element={<Givecomplaint/>}/>
        {/* <Route path='adminHome' element={<Adminhome/>}/> */}
      </Routes>
    </>
  );
}

export default App;
