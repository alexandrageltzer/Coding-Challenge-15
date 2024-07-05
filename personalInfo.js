//U28639518

import React from 'react';
import './PersonalInfo.css'; // Import your CSS file for styling

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <h2>Alexandra Geltzer</h2>
      <p>
       My name is Alexandra and I am a student at the University of South Florida completing my second year
        here. I am set to graduate this spring with my bachelors degree in Business Analytics and Information Systems. 
      </p>
      <div className="contact">
        <p>Email: geltzer@usf.edu </p>
        <p>LinkedIn: https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BeKVj2IZHQ2GrRWR%2BHRWzTw%3D%3D</p>
      </div>
    </div>
  );
}

export default PersonalInfo;
