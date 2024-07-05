// App.js

import React from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo';
import SkillsList from './SkillsList'; 
import ExperienceEntry from './ExperienceEntry'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Me</h1>
      </header>
      <main>
        <PersonalInfo />
         <SkillsList /> 
        <div className="section">
          <h2>Experience</h2>
          <ExperienceEntry
            title="Sales Associate"
            company="Francesca's"
            duration="November 2023- Present"
          />
        
      </main>
    </div>
  );
}

export default App;
