import React, { Fragment,useState } from "react";

const CreateCompany =()=>{
  
  const [compName, setCompName] = useState();
  

  const updateCompName = async(e)=>{
    e.preventDefault();
    try {
     const body = {compName};
          await fetch("https://niyikiza-ms.onrender.com//company", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        //console.log(response);
       window.location= '/dashboard'
    } catch (err) {
      console.error(err.message);
    }
    
  }
  return(<Fragment>        
<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      
      <div className="modal-header">
        <h4 className="modal-title">Create company</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

      
      <div className="modal-body">
       <input className="form-control" value={compName} onChange={(e)=>setCompName(e.target.value)} />
      </div>

      
      <div className="modal-footer">
       <button type="button" className="btn btn-success" data-dismiss="modal" onClick={updateCompName}>Create</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
  </Fragment>)
}

export default CreateCompany; 