// App.js

import React from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo';
import SkillsList from './SkillsList'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Me</h1>
      </header>
      <main>
        <PersonalInfo />
         <SkillsList /> 
        
      </main>
    </div>
  );
}

export default App;
