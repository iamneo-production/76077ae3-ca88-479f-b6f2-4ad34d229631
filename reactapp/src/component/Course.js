import React from 'react'
import AddCourse from './AddCourse';
import {useNavigate} from "react-router-dom"
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "../App.css"
import ViewCourse from './ViewCourse';

export default function Course() {
    const navigate=useNavigate();
    const clickhandler=()=>{
        navigate("/AddCourse")
    }
    const clickhandler1=()=>{
        navigate("/ViewCourse")
    }
  return (
    <div>
        <center>
        <h1 style={{background:"lightblue"}}>Course</h1>
        <p className="lead">
            <h3 style={{background:"lightgreen"}}>Add Course</h3>
             <button className="btn btn-success" style={{background:"#198754"}}
                        onClick={clickhandler}>AddCourse 
             </button>
        </p>
        <p className="lead">
            <h3 style={{background:"lightgreen"}}>View Course</h3>
             <button className="btn btn-success" style={{background:"#198754"}}
                        onClick={clickhandler1}>ViewCourse 
             </button>
        </p>
        <Routes>
            <Route path="/AddCourse" element={<AddCourse/>}>
                AddCourse
            </Route>
            <Route path="/ViewCourse" element={<ViewCourse/>}>
                ViewCourse
            </Route>
        </Routes>
        </center>
    </div>

  )
}
