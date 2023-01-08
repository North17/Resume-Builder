import React from 'react'
import AffModule from './AffModule'

const Affiliations = ({affs, setAffs}) => {


    function addAff() {
        setAffs( [...affs,
            {id: Math.floor(Math.random()*10000),
            text: ''}])
    }

    function deleteAff(id){
        setAffs(affs.filter((aff) => aff.id!== id))
    }

  return (
    <div>
        <h3 className='form-heading'>Affiliations</h3>
        <h4>Add your Affiliations</h4>
        
        <div className='aligner'>
        {affs.map((aff) =>
            <AffModule key= {aff.id} aff= {aff} allAffs = {affs} setAffs = {setAffs} onDelete= {deleteAff}/>)}
        </div>
        <div  class='job-button-aligner'><button onClick={addAff}>Add +</button></div>
    </div>
  )
}

export default Affiliations
