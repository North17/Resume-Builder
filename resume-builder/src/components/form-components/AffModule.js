const AffModule = ({aff, allAffs, setAffs, onDelete}) => {

  
  function setAffData(value){
    let arr = []
    for (let i=0; i < allAffs.length; i++) {
        if (allAffs[i].id === aff.id) {
            allAffs[i].text = value
        }
        arr.push(allAffs[i])
    setAffs(arr)
    }
}

  return (
    <div>
        <div>
            <input 
                type= 'text' 
                placeholder= 'Affiliation'
                value= {aff.text}
                onChange= {(e) => setAffData(e.target.value)}>                
            </input> 
            <button onClick={() => onDelete(aff.id)}>X</button>
        </div> 
      
    </div>
  )
}

export default AffModule
