import React from 'react'
import WorkModule from './WorkModule'

const WorkHistory = ({jobs, setJobs}) => {



    function addJob() {
      setJobs(
        [...jobs, 
        {id: Math.floor(Math.random()*10000),
        post: '',
        startDate: '',
        endDate: '',
        address: '',
        points: ''
        }])
    }

    function deleteJob(id) {
      setJobs(jobs.filter((job) => job.id !== id))
    }



  return (
    <div>
      <h3>Work History</h3>

      {jobs.map((job) => (
          <WorkModule key= {job.id} job = {job} allJobs = {jobs} setJobs = {setJobs} onDelete = {deleteJob}/>
      ))}  

      <div className='job-button-aligner'><button type='button' onClick={addJob}>Add+</button></div>  
    </div>
  )
}

export default WorkHistory
