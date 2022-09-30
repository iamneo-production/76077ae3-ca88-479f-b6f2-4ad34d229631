import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Nav} from "react-bootstrap"
import Enroll from './Enroll'
import {useNavigate} from "react-router-dom"
import "../App.css"

export default function Enrolledcourses() {
    const navigate = useNavigate();
    const clickhandler = () => {
        navigate("/Enroll")
    }
  return (
    
    <div>
        <nav >
        <h1 style={{background:"lightgreen"}}>Enrolledcourses</h1>
        <input className="form-control mr-sm-2" type="search"  style={{backgroundColor: "",position:"relative",left:"10px",top:"2px",height:"50px",width:"270px",borderRadius:"5em"}} placeholder="Type here search " aria-label="Search"/>
    <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}>
               Search
             </button> <br />
        <form style={{background:"lightblue"}}>
        <lable className="text-center m-4">Course name:Doug Abacus</lable><br/>
        <lable className="text-center m-4">Course Duration:3 months</lable><br/>
        <lable className="text-center m-4">Course Available Timings:6am to 6pm</lable><br/>
        <lable className="text-center m-4">Number of Students:222</lable><br/>
        <lable className="text-center m-4">Course Description:yyyy </lable><br /><br />
        <p className="lead">
             <button className="btn btn-success"
                        onClick={clickhandler}>Enroll 
             </button>
        </p>
        </form>
        <form style={{background:"lightblue"}}>
        <lable className="text-center m-4">Course name:Melissa & Doug Add Abacus</lable><br/>
        <lable className="text-center m-4">Course Duration:5 months</lable><br/>
        <lable className="text-center m-4">Course Available Timings:6am to 6pm</lable><br/>
        <lable className="text-center m-4">Number of Students:122</lable><br/>
        <lable className="text-center m-4">Course Description:yyyy </lable><br />
       
        
        <p className="lead">
             <button className="btn btn-success"
                        onClick={clickhandler}>Enroll 
             </button>
        </p>
        </form>
        </nav>

         <Routes>
            <Route path="/Enroll" element={<Enroll/>}>
                Enroll
            </Route>
        </Routes> 
   
    </div>

  )
}
