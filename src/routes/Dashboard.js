import React, { useEffect, useState} from 'react';
import CreateCompany from '../components/EditCompany';
import '../components/styles.css'


const Dashboard =()=> {
  const [comp, setComp]=useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCreateCompany, setShowCreateCompany] = useState(false);

    const companyFetch = async()=>{
      try {
        const response= await fetch("http://localhost:3002/company");
        const jsonData= await response.json();
        setComp(jsonData);
      }catch (err) {
        console.error(err.message);
       }
      };
      useEffect(()=>{
        companyFetch();
      },[]);
                                                  // when company div is selected
      const handleDoubledClickedCompany = (name) => {
  
        window.location = `/display/${name}`
      }
   
      const handleSelectedCompany =(id)=>{
        setSelectedItem(id);
     
      }
      const handleShowCreateCompany = () => {
        setShowCreateCompany(!showCreateCompany);
      };
      
     
      const DeleteCompany = async() =>{
        if (selectedItem !== null) {
        // Make a delete request to your backend server
          
          await fetch(`http://localhost:3002/company/${selectedItem}`,{
            method: "DELETE"
          })
          .then(()=>{
            setComp(comp.filter(item => item.id !== selectedItem));
            setSelectedItem(null);
          })
         .catch(error=>
            console.error('Error deleting item:', error));
      }
    }
 

  return ( 
    <div className='d-flex flex-row'>
        <div className="d-flex justify-content-around btn-group-vertical bg-primary dashboardbtn">
        <button type="button" className="btn btn-primary mt-5" onClick={() => (window.location = '/dashboard')}>Dashboard</button>
        <button type="button"  className="btn btn-success mt-5" data-toggle="modal" data-target="#myModal" onClick={handleShowCreateCompany}>Create Company</button>
        {/* <button type="button" className="btn btn-warning mt-5" data-toggle="modal" data-target={`#id${selectedItem}`} onClick={(e)=>updateCompany(e)} disabled={selectedItem === null} >Update</button> */}
        <button type="button" className="btn btn-danger mt-5 p-2" onClick={DeleteCompany } disabled={selectedItem === null}>Delete</button>
        
      </div>

     <div className=' m-3 text-primary'>
      
       <div className='d-flex flex-column  '>
          <div className=' d-flex justify-content-center' >
           <h1>Dashboard</h1>
          </div>
       <div className=' d-flex justify-content-center' >
         <p>Here are listed all registered companies <br/>Please select or create yours to continue...</p>
      </div>
     </div>
      <div className='container d-flex flex-row flex-wrap'>
       {comp.map((item) =>
      
        <div key={item.id} onDoubleClick={()=>handleDoubledClickedCompany(item.compName)}
         onClick={()=>handleSelectedCompany(item.id)}
         className="card m-2" >
          <div className=' m-2 circleDiv bg-primary' 
           styles='width: 20rem, height:20rem, border:1px solid, borderRadius:10rem'>
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.compName}</h5>
            <div className="btn btn-primary">10</div>
          </div>
        </div>
      
       )}
      </div>
     
    </div>
    {showCreateCompany && <CreateCompany />}
   </div>
  )
}


export default Dashboard;
