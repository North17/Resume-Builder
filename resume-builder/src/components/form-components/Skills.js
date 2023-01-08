import React, {useState} from 'react'
import SkillModule from './SkillModule'

const Skills = () => {

    const [skills, setSkills] = useState(
        [
        {id: Math.floor(Math.random()*10000),
        text: 'skill1'},

        {id: Math.floor(Math.random()*10000),
        text: 'skill2'}]
    )

    function addSkill() {
        setSkills([...skills, 
            {id: Math.floor(Math.random()*10000),
            text: ''}])
    }

    function deleteSkill(id) {
        setSkills( skills.filter((skill) => skill.id!== id ) )
    }

  return (
    <div>
        <h3>Skills</h3>
        <h4>Add your skills</h4>
        <button onClick={addSkill}>Add +</button>
        {skills.map((skill) =>
            <SkillModule key= {skill.id} skill= {skill} setSkills = {setSkills} allSkills= {skills} onDelete= {deleteSkill}/>)}
      
    </div>
  )
}

export default Skills
