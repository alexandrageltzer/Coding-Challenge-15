

import React from 'react';
import PropTypes from 'prop-types';
import './ExperienceEntry.css';

const ExperienceEntry = ({ title, company, duration }) => {
  return (
    <div className="experience-entry">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{duration}</p>
    </div>
  );
}

ExperienceEntry.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default ExperienceEntry;
