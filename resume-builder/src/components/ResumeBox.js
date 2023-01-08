import React from 'react'
import JsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImMail4} from 'react-icons/im'

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

  function  printDocument() {
      const input = document.getElementById('resume-pdf');
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new JsPDF('p', 'mm', [594, 420]);
          pdf.addImage(imgData, 'JPEG', 0, 0);
          pdf.save("download.pdf");
        })
      ;
    }


  return (

    <div id= 'resume'>
      <h2>Preview</h2>
      <button onClick={printDocument} type="button">Export PDF</button>
      <div className='resume-box' id= 'resume-pdf'>

        <div className='left'>
          <h1 className='res-name'>{name || "NAME"}</h1>

          <div className='res-prof-summ'>
            <h2 className='heading-grey'>PROFESSIONAL SUMMARY</h2>
            <p>{summText}</p>
          </div>

          <div className='res-work-his'>
            <h2 className='heading-grey'>WORK HISTORY</h2>
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
            <div><MdLocationOn/>{address}</div>
            <div><BsFillTelephoneFill/>{contNo}</div>
            <div><ImMail4/>{email}</div>
          </div>

          <div className='res-skills'>
            <h2 className='heading-white'>SKILLS</h2>
            <ul>
              {skills.map((skill) => (
                <li key={skill.id}>{skill.text}</li>
              
              ))}
            </ul>
          </div>

          <div className='res-edu'>
            <h2 className='heading-white' >EDUCATION</h2>
            {edus.map((edu) => (
              <div key={edu.id} className= 'res-edu-box'>
                <div className='res-degree'>{edu.degree}</div>
                <div className= 'res-inst'>{edu.inst}</div>
              </div>
            ))}
          </div>

          <div className='res-aff'>
            <h2 className='heading-white'>AFFILIATIONS</h2>
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
