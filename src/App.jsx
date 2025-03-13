import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  getPlants,
  getAttributes,
  getCompatibility,
} from "./services/Plants";

import { MatrixAll } from "./components/Matrix";

function App() {
  const [count, setCount] = useState(0);
  const [plants, setPlants] = useState(null);
  const [plantAttributes, setPlantAttributes] = useState(null);
  const [plantCompatibility, setPlantCompatibility] = useState(null);
  const [showMatrix, setShowMatrix] = useState(false);

  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  const consoleLog = (data)=>{
    window.console.log(JSON.stringify(data));
  }

  useEffect(() => { 
    getPlants(setPlants);
    getAttributes(setPlantAttributes);
    getCompatibility(setPlantCompatibility);
  }, []);

  if(!plants || !plantAttributes || !plantCompatibility){
    return <p>Loading...</p>
  }

 


  return (
    <>
      <div>
        <h3>PLANTS</h3>


        <MatrixAll plants={plants} plantCompatibility={plantCompatibility} plantAttributes={plantAttributes} />
      
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => consoleLog(plants) }>
          Plants to Console
        </button>
        <button onClick={() => consoleLog(plantAttributes) }>
          Plant Attributes to Console
        </button>
        <button onClick={() => consoleLog(plantCompatibility) }>
          Plant Compatibility to Console
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
