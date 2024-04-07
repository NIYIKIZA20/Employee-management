import React, { useState } from 'react';
const Mylogin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    age: 25
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  

   try {
    const body= formData;
    
    const response= await fetch("https://niyikiza-ms.onrender.com/user", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(body)
    });
    alert("Form well submitted!!");
    window.location = '/dashboard';  
  } catch (err) {
    console.error(err.message); 
   }
  };

  return (
    <form onSubmit={handleSubmit} className='ml-5 '>
      <h1 className='text-primary'>Register here:</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Username</label>
        <input 
          type="text" 
          placeholder='ex. nikiza joh'
          className="form-control" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input 
          type="email" 
          placeholder='ex. nikizajoh@email.com'
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
          placeholder='ex. NiJo21@.'
          className="form-control" 
          id="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <input 
          type="text" 
          placeholder='ex. production manager'
          className="form-control" 
          id="role" 
          name="role" 
          value={formData.role} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input 
          type="number" 
          placeholder='ex. 23'
          className="form-control" 
          id="age" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign up</button>
    </form>
  );
};

export default Mylogin;
