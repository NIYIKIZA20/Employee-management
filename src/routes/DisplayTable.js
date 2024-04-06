import React, {useState, useEffect, Fragment} from 'react'
import { useParams } from 'react-router-dom';
import AddEmployee from '../components/AddEmployee';
import UpdateEmploye from '../components/UpdateEmploye';
import '../components/styles.css'

const DisplayTable =() => {
  const {comp} = useParams();
  // console.log(comp);
 
  const [employe, setEmploye]= useState([]);
  const [employeClass, setEmployeClass]= useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [userUpdate, setUserUpdate]= useState(false);
  

  const employeFetch = async()=>{
    try {
      const response= await fetch("https://niyikiza-ms.onrender.com//user");
      const jsonData= await response.json();
      console.log(jsonData);
      let myData= jsonData.filter((data=> data.companyName === comp));
      setEmploye(myData);
    }catch (err) {
      console.error(err.message);
     }   
  };

  const CheckEmployeClick = (id) =>{
      setEmployeClass(id);
    //console.log(id);
  }
  const handleDeleteUser = async() =>{
    if (employeClass !== null) {
    // Make a delete request to your backend server
      
      await fetch(`https://niyikiza-ms.onrender.com//user/${employeClass}`,{
        method: "DELETE"
      })
      .then(()=>{
        setEmploye(employe.filter(item => item.id !== employeClass));
        setEmployeClass(null);
       
      }) 
     .catch(error=>
        console.error('Error deleting item:', error));
    }
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); 
  };

  useEffect(()=>{
    employeFetch();
  },[]);

  return (<Fragment>
    
    <div className='container-fluid d-flex ' >
      <div className=' bg-primary displaybtn'>
        <div className=" d-flex flex-column justify-content-around ">
         <button type="button" className="btn btn-primary mt-5" onClick={()=>window.location = `/display/${comp}`}>{comp} profile</button>
         <button type="button" className="btn btn-success mt-5" onClick={()=>setShowAddEmployee(!showAddEmployee)}>Add employee</button>
         <button type="button" className="btn btn-warning mt-5" 
         data-toggle="modal" data-target={`#id${employeClass}`} disabled={employeClass === null} 
         onClick={()=>setUserUpdate(!userUpdate)}>Update</button>
         <button type="button" className="btn btn-danger mt-5"  onClick={handleDeleteUser} disabled={employeClass === null}>Delete</button>
         <button type="button" className="btn btn-primary mt-5" onClick={()=>window.location = '/dashboard'}>Dashboard</button>
        </div>
      </div>

      {showAddEmployee? <AddEmployee item={comp}/>:

      <div className='container'>
        <div className='d-flex justify-content-between m-5'>
          <h1 className='text-primary d-flex '>{comp} employees profile</h1>  
           <div> 
            <input
              type="text"
              placeholder="Search by name"
              className="ms-3"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div>
          <div className="table-responsive">
           <table className="table table-bordered">
             <thead>
               <tr>
                <th>Number</th>
                <th>Names</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Role</th>
                <th>Age</th>
              </tr>
            </thead> 
            <tbody>
              {employe
                  .filter((item) =>
                    item.name.toLowerCase().includes(searchTerm)
                  ).map((item,index)=>(
                
                <tr key={item.id} onClick={()=>CheckEmployeClick(item.id)}
                style={{ backgroundColor: employeClass === item.id ? 'blue' : 'transparent' }}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.role}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
         </div>
       </div>
       
       {userUpdate && <UpdateEmploye item={[employeClass, comp]}/>}
      </div>}
     
   </div>
  </Fragment>
  
  )
}

export default DisplayTable;

