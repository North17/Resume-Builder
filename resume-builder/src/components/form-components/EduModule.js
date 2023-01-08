import React from 'react'

const EduModule = ({edu, allEdus, setEdus, onDelete}) => {

    function setEduDataDegree(value){
        let arr = []
        for (let i=0; i < allEdus.length; i++) {
            if (allEdus[i].id === edu.id) {
                allEdus[i].degree = value
            }
            arr.push(allEdus[i])
        setEdus(arr)
        }
    }

    function setEduDataInst(value){
        let arr = []
        for (let i=0; i < allEdus.length; i++) {
            if (allEdus[i].id === edu.id) {
                allEdus[i].inst = value
            }
            arr.push(allEdus[i])
        setEdus(arr)
        }
    }

  return (
    <div>
        <button onClick={() => onDelete(edu.id)}>X</button>
        <div>        
            <input 
                type= 'text' 
                placeholder= 'Degree'
                value= {edu.degree}
                onChange= {(e) => setEduDataDegree(e.target.value)}>                
            </input> 
            <input 
                type= 'text' 
                placeholder= 'Institution'
                value= {edu.inst}
                onChange= {(e) => setEduDataInst(e.target.value)}>                
            </input> 

            
        </div>
      
    </div>
  )
}

export default EduModule
