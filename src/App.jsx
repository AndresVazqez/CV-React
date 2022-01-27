import './App.css';
import { useState } from "react";
import  Hero  from './Components/Hero/Hero';
import Education  from './Components/Education/Education';
import  Experience  from './Components/Experience/Experience';
import Languages from './Components/Languages/Languages';
import Habilities from './Components/Habilities/Habilities';

import { CV } from './CV/CV';

const { hero, education, experience, languages, habilities } = CV;


function App() {

  const [showEducation, setEducation] = useState(true); 
  const changeMode = () => {    
    document.body.classList.toggle("darkMode");    
  }; 

  return (
    
    <div className="App">
      <Hero hero={hero} />      
      <button className="btn" onClick={() => setEducation(true)} >Education</button>
      <button className="btn" onClick={() => setEducation(false)} >Experience</button> 
      <button className="btn" onClick={() => changeMode()} >DarkMode</button>  
      <div>
        {showEducation ? (<Education education={education} />) : <Experience experience={experience} />}
      </div>
      <Languages languages={languages} />
      <Habilities habilities={habilities} />     
      
    </div>
  )
}

export default App;
