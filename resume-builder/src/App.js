import { useState } from 'react';
import Header from './components/Header.js' 
import SubHeading from './components/SubHeading' 
import SampleImage from './components/SampleImage' 
import Details from './components/form-components/Details.js';
import ResumeBox from './components/ResumeBox.js';


function App() {

  // Personal Details
  const [name, setName ] = useState('')
  const [address, setAddress ] = useState('')
  const [contNo, setContNo ] = useState('')
  const [email, setEmail ] = useState('')

  // Professional Summary
  const [summText, setSummText] = useState('')

  // Work History
  const [jobs, setJobs] = useState([
    {id: Math.floor(Math.random()*10000),
    post: 'Hello',
    startDate: '',
    endDate: '',
    address: '1',
    points: 'test line 1\ntest line 2'},
  ]
  )

  // Skills
  const [skills, setSkills] = useState(
    [
    {id: Math.floor(Math.random()*10000),
    text: 'skill1'},

    {id: Math.floor(Math.random()*10000),
    text: 'skill2'}]
  )

  // Education
  const [edus, setEdus] = useState(
    [
    {id: Math.floor(Math.random()*10000),
    degree: 'edu1',
    inst: 'blah1'},

    {id: Math.floor(Math.random()*10000),
    degree: 'edu2',
    inst: 'blah2'}]
  )

  // Affiliations
  const [affs, setAffs] = useState(
    [
        {id: Math.floor(Math.random()*10000),
        text: 'Abc'},
        {id: Math.floor(Math.random()*10000),
        text: 'Xyz'}
    ]
  )


  return (

    <div className="App">
      <Header/>  

      <SubHeading 
        text= 'Sample Resume:'/>  
      <SampleImage/> 

      <SubHeading 
        text= 'Enter Your Details:'/> 

      <Details
        name = {name} setName = {setName}
        address = {address} setAddress = {setAddress}
        contNo = {contNo} setContNo = {setContNo}
        email = {email} setEmail = {setEmail}
        summText = {summText} setSummText = {setSummText}
        jobs = {jobs} setJobs = {setJobs}
        skills = {skills} setSkills = {setSkills}
        edus = {edus} setEdus = {setEdus}
        affs = {affs} setAffs = {setAffs}/>

      <div className='submit-box'>
        <button className='preview'>Preview</button>
        <button className='download'>Download</button>
      </div>

      <ResumeBox
        name = {name} setName = {setName}
        address = {address} setAddress = {setAddress}
        contNo = {contNo} setContNo = {setContNo}
        email = {email} setEmail = {setEmail}
        summText = {summText} setSummText = {setSummText}
        jobs = {jobs} setJobs = {setJobs}
        skills = {skills} setSkills = {setSkills}
        edus = {edus} setEdus = {setEdus}
        affs = {affs} setAffs = {setAffs}
        /> 
      

    </div>
  );
}

export default App;
