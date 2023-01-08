import React from 'react'
import PersDet from './PersDet'
import ProfSumm from './ProfSumm'
import WorkHistory from './WorkHistory'
import Skills from './Skills'
import Affiliations from './Affiliations'
import Education from './Education'


const Details = ({
  name, setName,
  address, setAddress,
  contNo, setContNo,
  email, setEmail,
  summText, setSummText,
  jobs, setJobs,
  skills, setSkills,
  edus, setEdus,
  affs, setAffs}
) => {
  return (

    <div className='form-cont'>

        <PersDet 
          name = {name} setName = {setName} 
          address = {address} setAddress = {setAddress} 
          contNo = {contNo} setContNo = {setContNo} 
          email = {email} setEmail = {setEmail} />

        <ProfSumm
          summText = {summText} setSummText = {setSummText}/>

        <WorkHistory
          jobs = {jobs} setJobs = {setJobs}/>

        <Skills
          skills = {skills} setSkills = {setSkills}/>

        <Education
          edus = {edus} setEdus = {setEdus}/>
          
        <Affiliations
          affs = {affs} setAffs = {setAffs}/>
      
    </div>
  )
}

export default Details
