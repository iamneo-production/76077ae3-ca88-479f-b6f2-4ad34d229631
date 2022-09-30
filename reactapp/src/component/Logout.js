import React from 'react'
import Form from './Form'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate();
    const clickhandler = () => {
        navigate("/")
    }
  return (
    <div>
        <center><h1> 
     {/* <button className="btn btn-success" style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}
        onClick={clickhandler}>Register 
             </button> */}
     </h1> </center>          
    </div>
  )
}
