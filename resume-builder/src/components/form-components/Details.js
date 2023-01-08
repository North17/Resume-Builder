import React from 'react'
import PersDet from './PersDet'
import ProfSumm from './ProfSumm'
import WorkHistory from './WorkHistory'
import Skills from './Skills'
import Affiliations from './Affiliations'
import Education from './Education'


const Details = () => {
  return (
    <div className='form-cont'>
        <PersDet />
        <ProfSumm/>
        <WorkHistory/>
        <Skills/>
        <Education/>
        <Affiliations/>
      
    </div>
  )
}

export default Details
