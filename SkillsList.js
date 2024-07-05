
import React from 'react';
import Skill from './Skill'; // Import the Skill component
import './SkillsList.css'; // Import your CSS file for styling

const SkillsList = () => {
  // Define skills data 
  const skills = [
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Communication', level: 'Advanced' },
    { name: 'Leadership', level: 'Advanced' },
    { name: 'CSS', level: 'Intermediate' },
    
  ];

  return (
    <div className="skills-list">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
}

export default SkillsList;
