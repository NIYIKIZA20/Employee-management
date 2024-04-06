import React, { useState } from 'react';

const AddEmployee = ({item}) => {
  console.log(item);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    age: 20,
    phone:'',
    description:'user',
    companyName:item

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
    alert("You've successfully added an empoloyee");
     console.log(response);
    window.location = `/display/${item}`;  
  } catch (err) {
    console.error(err.message); 
   }
    // console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className='form ml-5'>
      <h1 className='text-primary'>Add employee</h1>
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
          placeholder=''
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
          placeholder='.'
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
          placeholder=''
          className="form-control" 
          id="role" 
          name="role" 
          value={formData.role} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input 
          type="text" 
          placeholder=''
          className="form-control" 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input 
          type="number" 
          placeholder=''
          className="form-control" 
          id="age" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <button type="submit" className="btn btn-success" data-dismiss="form">Create</button>
        <button type="submit" className="btn btn-danger" onClick={()=> window.location=`/display/${item}`}>Close</button>
   
      </div>
    </form>
  );
};

export default AddEmployee;
