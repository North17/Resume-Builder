const SkillModule = ({skill, setSkills, allSkills, onDelete}) => {

    function setSkillData(value){
        let arr = []
        for (let i=0; i < allSkills.length; i++) {
            if (allSkills[i].id === skill.id) {
                allSkills[i].text = value
            }
            arr.push(allSkills[i])
        setSkills(arr)
        }
    }

  return (
    <div>
        <div>
            <input 
                type= 'text' 
                placeholder= 'Skill'
                value= {skill.text}
                onChange= {(e) => setSkillData(e.target.value)}>                
            </input> 
            <button onClick={() => onDelete(skill.id)}>X</button>
        </div>     
    </div>
  )
}

export default SkillModule
