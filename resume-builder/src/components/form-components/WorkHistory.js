import React from 'react'
import { useState } from 'react'
import WorkModule from './WorkModule'

const WorkHistory = () => {

  

    const [jobs, setJobs] = useState([
        {id: Math.floor(Math.random()*10000),
        post: 'Hello',
        startDate: '',
        endDate: '',
        address: '1',
        points: 'test line 1\ntest line 2'},
    ]
    )

    function addJob() {
      setJobs(
        [...jobs, 
        {id: Math.floor(Math.random()*10000),
        post: '',
        startDate: '',
        endDate: '',
        address: '1',
        points: ''
        }])
    }

    function deleteJob(id) {
      setJobs(jobs.filter((job) => job.id !== id))
    }



  return (
    <div>
      <h3>Work History</h3>

      <button type='button' onClick={addJob}>Add+</button>

      {jobs.map((job) => (
          <WorkModule key= {job.id} job = {job} onDelete = {deleteJob}/>
      ))}    
    </div>
  )
}

export default WorkHistory
