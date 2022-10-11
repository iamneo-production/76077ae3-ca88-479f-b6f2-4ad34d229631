import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Academy from "./Academy"
import Enrolledcourses from "./Enrolledcourses"
import Login from "./Login"
import AdminDashboard from './AdminDashboard'
import {Nav} from "react-bootstrap"
import "../App.css"
import ViewDetails from './ViewDetails'
import Logout from './Logout'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
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
        <a className="navbar-brand">Abacus academy</a>
        <form className="form-inline">
         <Nav.Link as={Link} to={"/ViewDetails"}>ViewDetails</Nav.Link>   
       <Nav.Link as={Link} to={"/Academy"}>Academy</Nav.Link> 
       <Nav.Link as={Link} to={"/Enrolledcourses"}>Enrolledcourses</Nav.Link>
        {/* <Nav.Link as={Link} to={"/Logout"}>Logout</Nav.Link>  */}
        <button className="btn btn-success" style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}
        onClick={clickhandler}>Logout 
             </button>
       </form>
       </nav>
       <center >     
       <input className="form-control mr-sm-2" type="search"  style={{backgroundColor: "",position:"relative",left:"10px",top:"2px",height:"50px",width:"370px",borderRadius:"10em"}} placeholder=" Type here search " aria-label="Search"/>
    <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}>
               Search
             </button>
        
        </center>
        
        <Routes>
            <Route path="/Academy" element={<Academy/>}>
                Academy
            </Route>
            <Route path="/Enrolledcourses" element={<Enrolledcourses/>}>
                Enrolledcourses
            </Route>
            <Route path="/ViewDetails" element={<ViewDetails/>}>
                ViewDetails
            </Route> 
            <Route path="/Logout" element={<Logout/>}>
            Logout
            </Route>
        </Routes>
    </div>
    
  )
}
