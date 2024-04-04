import React, {Fragment } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../App.css'


const Welcome= ()=>{
    return(<Fragment>
        
        <h1 className='text-center m-5'>Welcome to employee management system</h1>
        <div className='container-fluid bg-primary text-white align-baseline myContainer' >
           <div className='container col-sm-7 ' >
             <h4 className='text-center p-5' >You have already created you business or a company. 
                Good, nice to hear!  You can now manage your employees, 
                keep their records, access and update them at any time in 
                an effective and most secure way!  Are you ready?  
                Let's go! Get started now.
             </h4>
             
             <div className='text-center p-5'>
                <Link to= "/login" className='btn btn-warning'>Get started</Link>
            </div>
            </div>
        </div>
        <div><Footer/></div>
    </Fragment>)
}
export default Welcome;