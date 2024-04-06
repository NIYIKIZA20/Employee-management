import React,{useState, Fragment} from 'react'

 const UpdateEmploye =(props)=> {
    console.log(props.item[1]);

    //const [compName, setCompName] = useState();
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
        
        const response =await fetch(`https://niyikiza-ms.onrender.com//user/${props.item[0]}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
        //alert("User well updated");
        window.location = `/display/${props.item[1]}`;  
        // console.log(response);
      } catch (err) {
        console.error(err.message); 
       }
        console.log('Form submitted:', formData);
      };

    return(<Fragment>        
      <div className="modal" id={`id${props.item[0]}`}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Create company</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
  
            <div className="modal-body">
              <form  className='form ml-5' onSubmit={handleSubmit}>
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
                <div className="modal-footer">
              <button type="submit" className="btn btn-warning" >Edit</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
             </form>
            </div>
            
  
          </div>
        </div>
      </div>
    </Fragment>)
  }
  

export default UpdateEmploye;