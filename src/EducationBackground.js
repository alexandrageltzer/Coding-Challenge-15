
import React from 'react';
import PropTypes from 'prop-types';
import './EducationBackground.css'; // Import your CSS file for styling

const EducationBackground = ({ institution, degree, years }) => {
  return (
    <div className="education-background">
      <h3>{St. Petersburg College}</h3>
      <p>{Associates in Arts}</p>
      <p>{2021-2023}</p>
      <h3>{University of South Florida}</h3>
      <p>{Bachelors}</p>
      <p>{2023-2025}</p>
    </div>
  );
}

EducationBackground.propTypes = {
  institution: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
};

export default EducationBackground;
