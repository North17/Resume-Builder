import React, { useState } from 'react'

const WorkModule = ({job, onDelete}) => {

  const [post, setPost] = useState(job.post)
  const [startDate, setStartDate] = useState(job.startDate)
  const [endDate, setEndDate] = useState(job.endDate)
  const [address, setAddress] = useState(job.address)
  const [points, setPoints] = useState( job.points)

  return (
    <div className='work-module'>

      <button onClick={() => onDelete(job.id)}>X</button>
      <div className='form-sub-group'>
            <label>Post</label>
            <input 
                type= 'text' 
                placeholder= 'Post'
                value= {post}
                onChange= {(e) => setPost(e.target.value)}>                
            </input>
        </div>

        <div className='form-sub-group'>
            <label>Start Date</label>
            <input 
                type= 'text' 
                placeholder= 'Start Date'
                value= {startDate}
                onChange= {(e) => setStartDate(e.target.value)}>                
            </input>
        </div>

        <div className='form-sub-group'>
            <label>End Date</label>
            <input 
                type= 'text' 
                placeholder= 'End Date'
                value= {endDate}
                onChange= {(e) => setEndDate(e.target.value)}>                
            </input>
        </div>

        <div className='form-sub-group'>
            <label>Address</label>
            <input 
                type= 'text' 
                placeholder= 'Address'
                value= {address}
                onChange= {(e) => setAddress(e.target.value)}>                
            </input>
        </div>

        <div className='form-sub-group'>
            <label>Details</label>
            <textarea 
                type= 'text' 
                placeholder= 'Details (may use points)'
                value= {points}
                onChange= {(e) => setPoints(e.target.value)}>                
            </textarea>
        </div>

        
              
    </div>
  )
}

export default WorkModule
