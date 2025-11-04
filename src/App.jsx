import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";

// import Allroom from "./pages/Allroom";
import FeesPage from "./pages/Fees";
import Home from "./pages/Home";
import Adminlogin from "./login/Adminlogin";
import Adminregister from "./login/Adminregister";
import Userregister from "./login/Userregister";
import UserLogin from "./login/UserLogin";
import Adminhome from "./pages/Adminhome";
import ComplaintPage from "./pages/ComplaintPage";
import Viewmaintenence from "./pages/Viewmaintenence";
import Payfees from "./pages/Payfees";
import Allstudents from "./pages/Allstudents";
import Givecomplaint from "./pages/Givecomplaint";
import AddRooms from "./components/AddRooms";
import ChooseLogin from "./login/ChooseLogin"
import ViewRooms from "./components/ViewRooms";



function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adreg" element={<Adminregister />} />
        <Route path="adminhome" element={<Adminhome />} />
        <Route path="adlog" element={<Adminlogin />} />
        <Route path="userreg" element={<Userregister />} />
        <Route path="userlog" element={<UserLogin />} />
        <Route path="complaints" element={<ComplaintPage />} />
        <Route path="viewmain" element={<Viewmaintenence />} />
        {/* <Route path="allrooms" element={<Allroom />} /> */}
        <Route path="fees" element={<FeesPage />} />
        <Route path="payfee" element={<Payfees />} />
        <Route path="chooselogin" element={<ChooseLogin/>} />
        <Route path="alluser" element={<Allstudents />} />
        <Route path="givecomplaint" element={<Givecomplaint />} />
        <Route path="addrooms" element={<AddRooms/>}/>
        <Route path="allrooms" element={<ViewRooms/>}/>


      </Routes>
    </>
  );
}

export default App;
