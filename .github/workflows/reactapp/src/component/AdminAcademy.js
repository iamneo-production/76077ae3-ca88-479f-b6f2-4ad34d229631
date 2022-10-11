import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AddAcademy from './AddAcademy';
import EditAcademy from './EditAcademy';
import ViewAcademy from './ViewAcademy';
import {useNavigate} from "react-router-dom"
import "../App.css"


export default function AdminAcademy() {
  const navigate = useNavigate();
  const clickhandler = () => {
      navigate("/AddAcademy")
  }
  const clickhandler1= () => {
    navigate("/EditAcademy/{id}")
}
const clickhandler2= () => {
  navigate("/ViewAcademy")
}

  
  return (
  
    <div>
      <center>
       <h1 style={{background:"lightblue"}}> Academy</h1> 
       <p className="lead">
        <h3 style={{background:"lightgreen"}}>Add Academy</h3>
             <button className="btn btn-success"
                        onClick={clickhandler}>AddAcademy 
             </button>
             </p>
             <p className="Lead">
             <h3 style={{background:"lightgreen"}}>Edit Academy</h3>
             <button className="btn btn-success"
                        onClick={clickhandler1}>EditAcademy 
             </button>
             </p>
             <p className='Lead'>
             <h3 style={{background:"lightgreen"}}>View Academy</h3>
             <button className="btn btn-success"
                        onClick={clickhandler2}>ViewAcademy 
             </button>
             
        </p>
        </center>
        <Routes>
            <Route path="/AddAcademy" element={<AddAcademy/>}>
                AddAcademy
            </Route>
            <Route path="/EditAcademy/{id}" element={<EditAcademy/>}>
                EditAcademy
            </Route>
            <Route path="/ViewAcademy" element={<ViewAcademy/>}>
                ViewAcademy
            </Route>

        </Routes> 
    </div>
   
  )
}