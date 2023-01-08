import React from 'react'

const ProfSumm = ({summText, setSummText}) => {

  return (
    <>
        <h3>Professional Summary: </h3> 

        <div className='form-sub-group text-group'>
            <textarea 
                type= 'text' 
                placeholder= 'Add a brief professional summary'
                value= {summText}
                onChange= {(e) => setSummText(e.target.value)}>
                
            </textarea>        
        </div>     
    </>
  )
}

export default ProfSumm
