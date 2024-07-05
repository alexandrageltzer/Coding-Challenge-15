// Skill.js

import React from 'react';
import PropTypes from 'prop-types';
import './Skill.css'; // Import your CSS file for styling

const Skill = ({ name, level }) => {
  return (
    <div className="skill">
      <h3>{name}</h3>
      <p>Proficiency: {level}</p>
    </div>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default Skill;
