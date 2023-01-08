import React from 'react'

const PersDet = ({name, setName,
    address, setAddress,
    contNo, setContNo,
    email, setEmail}    
) => {


  return (
    <>
        <h3>Personal Details: </h3>

        <div className='form-sub-group'>
            <label>Name</label>
            <input 
                type= 'text' 
                placeholder= 'Add Your Name'
                value= {name}
                onChange= {(e) => setName(e.target.value)}>
                
            </input>
        </div>
        <div className='form-sub-group'>
            <label>Address</label>
            <input 
                type= 'text' 
                placeholder= 'Add Your Address'
                value= {address}
                onChange= {(e) => setAddress(e.target.value)}>
                
            </input>
        </div>
        <div className='form-sub-group'>
            <label>Contact Number</label>
            <input 
                type= 'tel' 
                placeholder= 'Add Your Contact Number'
                value= {contNo}
                onChange= {(e) => setContNo(e.target.value)}>
                
            </input>
        </div>
        <div className='form-sub-group'>
            <label>Email ID</label>
            <input 
                type= 'email' 
                placeholder= 'Add your Email ID'
                value= {email}
                onChange= {(e) => setEmail(e.target.value)}>
                
            </input>
        </div>
      
    </>
  )
}

export default PersDet; 
