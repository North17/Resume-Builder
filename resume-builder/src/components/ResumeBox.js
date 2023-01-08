import React from 'react'
import JsPDF from 'jspdf'

const ResumeBox = ({
  name, 
  address, 
  contNo, 
  email, 
  summText, 
  jobs, 
  skills, 
  edus, 
  affs}) => {

  const generatePDF = () => {

    const resume = new JsPDF('portrait','pt','a4');
    resume.html(document.querySelector('#resume')).then(() => {
        resume.save('resume.pdf');
    });
  }


  return (

    <div id='resume'>
      <button onClick={generatePDF} type="button">Export PDF</button>
      <div className='resume-box'>

        <div className='left'>
          <h1 className='res-name'>{name || "NAME"}</h1>

          <div className='res-prof-summ'>
            <h2 className='heading-grey'>Professional Summary</h2>
            <p>{summText}</p>
          </div>

          <div className='res-work-his'>
            <h2 className='heading-grey'>Work History</h2>
            {jobs.map((job) =>
              (
              <div key={job.id} className= 'res-job'>
                <h3>
                  <span className='res-job-post'>{job.post}</span>
                  <span className='res-job-info'>  {job.startDate} - {job.endDate}</span></h3>
                <h3 className='res-job-info'>{job.address}</h3>
                <p>{job.points}</p>
              </div>))}
          </div>
        </div>

        <div className='right'>
          <div className='res-add'>
            <div>{address}</div>
            <div>{contNo}</div>
            <div>{email}</div>
          </div>

          <div className='res-skills'>
            <h2 className='heading-white'>Skills</h2>
            <ul>
              {skills.map((skill) => (
                <li key={skill.id}>{skill.text}</li>
              
              ))}
            </ul>
          </div>

          <div className='res-edu'>
            <h2 className='heading-white'>Education</h2>
            {edus.map((edu) => (
              <div key={edu.id} className= 'res-edu'>
                <div className='res-degree'>{edu.degree}</div>
                <div className= 'res-inst'>{edu.inst}</div>
              </div>
            ))}
          </div>

          <div className='res-aff'>
            <h2 className='heading-white'>Affiliations</h2>
            <ul>
              {affs.map((aff) => (
                <li key={aff.id}>{aff.text}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
              
    </div>
  )
}

export default ResumeBox
