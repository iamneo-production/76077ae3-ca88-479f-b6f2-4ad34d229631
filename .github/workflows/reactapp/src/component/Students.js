import React from 'react'
import AddStudent from './AddStudent';
import {useNavigate} from "react-router-dom"
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "../App.css"
import Display_Students from './Display_Students';
import EditStudent from './EditStudent';


export default function Students() {
    const navigate=useNavigate();
    const clickhandler=()=>{
        navigate("/AddStudent")
    }
    const clickhandler1=()=>{
        navigate("/Display_Students")
    }
    const clickhandler2=()=>{
        navigate("/EditStudent/{id}")
    }
  return (
    <div>
        <center>
        <h1 className='Lead' style={{background:"lightgreen"}}>Students</h1>
        <h2 style={{background:"lightblue"}}>AddStudent</h2>
        <p className="lead">
            <button className="btn btn-success"
            onClick={clickhandler}>AddStudent
            </button>

        </p>
        <h2 style={{background:"lightblue"}}>ViewStudent</h2>
         <p className="lead">
            <button className="btn btn-success"
            onClick={clickhandler1}>Display_Students
            </button>

        </p> 
        <h2 style={{background:"lightblue"}}>EditStudent</h2>
         <p className="lead">
            <button className="btn btn-success"
            onClick={clickhandler2}>EditStudent
            </button>

        </p> 
        <Routes>
            <Route path="/AddStudent" element={<AddStudent />}>
                AddStudent
            </Route>
             <Route path="/Display_Students" element={<Display_Students />}>
                Display_Students
            </Route> 
            <Route path="/EditStudent/{id}" element={<EditStudent />}>
                EditStudent
            </Route> 
        </Routes>
        </center>
    </div>
  )
}
