
import React from 'react';
import PropTypes from 'prop-types';
import './EducationBackground.css'; // Import your CSS file for styling

const EducationBackground = ({ institution, degree, years }) => {
  return (
    <div className="education-background">
      <h3>{institution}</h3>
      <p>{degree}</p>
      <p>{years}</p>
    </div>
  );
}

EducationBackground.propTypes = {
  institution: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
};

export default EducationBackground;
