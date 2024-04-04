import React, {useState} from 'react';
import Mylogin from '../components/Mylogin';
import Signup from '../components/Signup';
import '../App.css'

const Login = ()=>{
  let [click, setClick]= useState(true);
  const handleClick =()=> setClick(false );
  const handleOnClick= ()=>setClick(true);
  

  return(
      <div className=" d-flex flex-row vh-100 container-fluid" >
        <div className="col-sm-4 bg-primary loginContent" >
          <div className='d-flex justify-content-center flex-column'>
            <p className='text-light font-weight-bold m-5'>Do you already have an account,<br/> please login to continue</p>
            <button className='btn ml-5 mr-5' onClick={handleClick}>Login</button>
          </div>
          <div className='d-flex justify-content-center flex-column'>
            <p className='text-light font-weight-bold m-5'>You don't have an account,<br/> You need to register <br/> please sign up to continue</p>
            <button className='btn ml-5 mr-5' onClick={handleOnClick}>sign up</button>
          </div>
        </div>
        <div className="col-sm-8">
          
          {(click=== false)? <Signup/>:<Mylogin/>}
        </div>
      </div>
    )
}

export default Login;
