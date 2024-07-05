

import React from 'react';
import PropTypes from 'prop-types';
import './ExperienceEntry.css';

const ExperienceEntry = ({ title, company, duration }) => {
  return (
    <div className="experience-entry">
      <h3>{Sales Associate}</h3>
      <p>{Francesca's}</p>
      <p>{November 2023-Present}</p>
    </div>
  );
}

ExperienceEntry.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default ExperienceEntry;
