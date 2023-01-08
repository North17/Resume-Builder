import React, { useState } from 'react'
import AffModule from './AffModule'

const Affiliations = () => {

    const [affs, setAffs] = useState(
        [
            {id: Math.floor(Math.random()*10000),
            text: 'Abc'},
            {id: Math.floor(Math.random()*10000),
            text: 'Xyz'}
        ]
    )

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
        <h3>Affiliations</h3>
        <h4>Add your Affiliations</h4>
        <button onClick={addAff}>Add +</button>
        {affs.map((aff) =>
            <AffModule key= {aff.id} aff= {aff} allAffs = {affs} setAffs = {setAffs} onDelete= {deleteAff}/>)}
      
    </div>
  )
}

export default Affiliations
