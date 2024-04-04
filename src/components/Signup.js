import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("you're signed up successfully")                             // Submit formData to backend server for sign up
    //console.log('Form submitted:', formData);                       NOT YET DONE.
    window.location = '/dashboard';
  };

  const handleForgotPassword = () => {
                                // Handle forgot password action
    console.log('Forgot password clicked');
    
  };

  return (
    <div className='m-2'>
      <h6>You already have an account! </h6>
      <h6>Please <span className='text-info font-weight-bold'>login</span> to continue... </h6>
      <h1 className='text-primary'>Login form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary" >Login</button>
        <a href="" onClick={handleForgotPassword} className="m-4">Forgot Password?</a>
      </form>
    </div>
  );
};

export default SignUpForm;
