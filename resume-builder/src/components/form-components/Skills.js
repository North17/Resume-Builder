import React from 'react'
import SkillModule from './SkillModule'

const Skills = ({skills, setSkills}) => {


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
        
        {skills.map((skill) =>
            <SkillModule key= {skill.id} skill= {skill} setSkills = {setSkills} allSkills= {skills} onDelete= {deleteSkill}/>)}
        <button onClick={addSkill}>Add +</button>
    </div>
  )
}

export default Skills
