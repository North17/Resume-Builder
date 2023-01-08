import React, {useState} from 'react'
import EduModule from './EduModule'

const Education = () => {

    const [edus, setEdus] = useState(
        [
        {id: Math.floor(Math.random()*10000),
        degree: 'edu1',
        inst: 'blah1'},

        {id: Math.floor(Math.random()*10000),
        degree: 'edu2',
        inst: 'blah2'}]
    )

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
        <h3>Education</h3>
        <h4>Add Details of Previous Education</h4>
        <button onClick={addEdu}>Add +</button>
        {edus.map((edu) =>
            <EduModule key= {edu.id} edu= {edu} setEdus = {setEdus} allEdus= {edus} onDelete= {deleteEdu}/>)}
      
      
    </div>
  )
}

export default Education
