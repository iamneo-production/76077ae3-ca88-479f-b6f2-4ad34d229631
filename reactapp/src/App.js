import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from './component/Form';
import Login from './component/Login';
import NavBar from './component/NavBar';
import Academy from './component/Academy';
import Enroll from './component/Enroll';
import Enrolledcourses from './component/Enrolledcourses';
import {Link,BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
import AddAcademy from './component/AddAcademy';
import EditAcademy from './component/EditAcademy';
import ViewAcademy from './component/ViewAcademy';
import AdminDashboard from './component/AdminDashboard';
import AdminAcademy from './component/AdminAcademy';
import AddCourse from './component/AddCourse';
import Course from './component/Course';
import AddStudent from './component/AddStudent';
import Students from './component/Students'
import Display_Students from './component/Display_Students';
import EditStudent from './component/EditStudent';
import ViewDetails from './component/ViewDetails';
import Logout from './component/Logout';
import ViewCourse from './component/ViewCourse';


function App() {
  
  return (
    <BrowserRouter>
    <div >
       
  
     <Routes>
      <Route path="/NavBar" element={<NavBar />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="viewDetails" element={<ViewDetails/>} />
      <Route path="/" element={<Form />} />
      <Route path="Form" element={<Form />} />
      <Route path="enroll" element={<Enroll />} />
      <Route path="admindashboard" element={<AdminDashboard />} />
      <Route path="adminacademy" element={<AdminAcademy/>} />
      <Route path="viewacademy" element={<ViewAcademy />} />
      <Route path="addacademy" element={<AddAcademy />} />
      <Route path="editacademy/:id" element={<EditAcademy />} />
      <Route path="course" element={<Course />}/>
      <Route path="addcourse" element={<AddCourse />} />
      <Route path="viewcourse" element={<ViewCourse />} />
      <Route path="students" element={<Students/>} />
      <Route path="addstudent" element={<AddStudent />} />
      <Route path="editstudent/:id" element={<EditStudent />} />
       <Route path="display_students" element={<Display_Students />} /> 
      <Route path="enrolledcourses" element={<Enrolledcourses />} />
      <Route path="academy" element={<Academy />} />
      
     </Routes>
   
      
    </div>
    </BrowserRouter> 
  );
}

export default App;
