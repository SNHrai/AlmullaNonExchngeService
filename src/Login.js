import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./App.css";


function Login() {



   
    
    const managerUsername = "anisurRahman";
    const managerPassword = "123456";

    const foremanUsername = "shabir";
    const foremanPassword = "123456";

    const technician = "shakil";
    const technicianpassword = "123456";

    const navigate = useNavigate();


   const [usernameText , setusernameText] = useState();
   const [passwordText , setpasswordText] = useState();

   const hello = (e) => {
          setusernameText(e.target.value)
   }

   const passw = (e) => {
    setpasswordText(e.target.value)
   }

   const Submit = () => {
       if (managerUsername === usernameText && managerPassword === passwordText){
        navigate('/VehicleRegister')
       }else if(foremanUsername === usernameText && foremanPassword === passwordText) {
         navigate('/foremanv')
       }else if(technician === usernameText && technicianpassword === passwordText) {
        navigate('/technicianview')
       }else{
        alert("Invalid username or password!!")
       }
   }

  return (
   
  
    <>
    <div className="Main">
      
      <div className="inputbtn">
      <div className="images">
        <img src="/images/bitmap@2x.png" alt="example" />
        <h3><b>Al Mulla Industries Service Mobile Solutions</b></h3>
      </div>
        <input type="email" placeholder="User Name" className="btn1" onChange={hello}/>
        <div className="inputbtn2">
        <input type="password" placeholder="Password" className="btn2" onChange={passw}/>
        </div>
        <div className="submitbtn">
        <button className="sbbntn" onClick={Submit}>Login</button>
       </div>
     <div className="achorTag">

    <a href="#"className="anchortg"><b>Forgot Password?</b> </a>
     </div>
  
       </div>
    </div>
   
   
    </>
  )
}

export default Login