import React from 'react'
import AdminAcademy from './AdminAcademy'
import {Nav} from "react-bootstrap"
import {Link,BrowserRouter as Router,Routes,Route, useNavigate} from "react-router-dom"
import Course from './Course';
import Students from './Students';
import "../App.css"
import ViewDetails from './ViewDetails';
import Logout from './Logout';


export default function AdminDashboard() {
  const navigate = useNavigate();
  const clickhandler = () => {
      navigate("/")
  }
  function onLogout(e){
    e.preventDefault();
}
  return (
    <div>
    <nav className="navbar navbar-dark bg-primary justify-content-between">
    <a className="navbar-brand">Admin Home Page</a>
    <form className="form-inline">
    {/* <Nav.Link as={Link} to={"/AdminDashboard"}>AdminDashboard</Nav.Link>  
   <Nav.Link as={Link} to={"/Academy"}>Academy</Nav.Link> 
   <Nav.Link as={Link} to={"/Enrolledcourses"}>Enrolledcourses</Nav.Link> */}
   <Nav.Link as={Link} to={"/ViewDetails"}>ViewDetails</Nav.Link>
    <Nav.Link as={Link} to={"/AdminAcademy"}>AdminAcademy</Nav.Link> 
    <Nav.Link as={Link} to={"/Course"}>Course</Nav.Link>
    <Nav.Link as={Link} to={"/Students"}>Students</Nav.Link>
    {/* <Nav.Link as={Link} to={"/Logout"}>Logout</Nav.Link> */}
       <button className="btn btn-success" style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}
        onClick={clickhandler}>Logout 
             </button> 
   </form>
   </nav>
   <center >     
    <input className="form-control mr-sm-2" type="search"  style={{backgroundColor: "",position:"relative",left:"10px",top:"2px",height:"50px",width:"270px",borderRadius:"10em"}} placeholder="Type here search " aria-label="Search"/>
    <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}>
               Search
             </button>
    
    </center>
    <Routes>
    <Route path="/ViewDetails" element={<ViewDetails/>}>
            ViewDetails
        </Route>
        <Route path="/AdimAcademy" element={<AdminAcademy/>}>
            AdminAcademy
        </Route>
         <Route path="/Course" element={<Course/>}>
            Enrolledcourses
        </Route>
         <Route path="/Students" element={<Students/>}>
            Students
        </Route> 
        <Route path="/Logout" element={<Logout/>}>
            Logout
        </Route> 
    </Routes>
</div>
  )
}
