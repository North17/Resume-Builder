import React from 'react'
import EduModule from './EduModule'

const Education = ({edus, setEdus}) => {

    function addEdu() {
        setEdus([...edus, 
            {id: Math.floor(Math.random()*10000),
            degree: '',
            inst: ''}])
    }

    function deleteEdu(id) {
        setEdus( edus.filter((edu) => edu.id!== id ) )
    }

  return (
    <div>
        <h3 className='form-heading'>Education</h3>
        <h4>Add Details of Previous Education</h4>

        <div className='aligner'>
        {edus.map((edu) =>
            <EduModule key= {edu.id} edu= {edu} setEdus = {setEdus} allEdus= {edus} onDelete= {deleteEdu}/>)}
      
        </div>
      <div  class='job-button-aligner'><button onClick={addEdu}>Add +</button></div>
    </div>
  )
}

export default Education
